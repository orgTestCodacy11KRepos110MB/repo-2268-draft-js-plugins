import { EditorState, SelectionState, ContentState } from 'draft-js';
import { EditorPlugin } from '@draft-js-plugins/editor';
import insertNewLine from './modifiers/insertNewLine';
import setSelection from './modifiers/setSelection';
import setSelectionToBlock from './modifiers/setSelectionToBlock';
import createDecorator from './createDecorator';
import createBlockKeyStore, {
  BlockKeyStore,
} from './utils/createBlockKeyStore';
import blockInSelection from './utils/blockInSelection';
import getBlockMapKeys from './utils/getBlockMapKeys';
import removeBlock from './modifiers/removeBlock';
import { defaultTheme, FocusPluginTheme } from './theme';

const focusableBlockIsSelected = (
  editorState: EditorState,
  blockKeyStore: BlockKeyStore
): boolean => {
  const selection = editorState.getSelection();
  if (selection.getAnchorKey() !== selection.getFocusKey()) {
    return false;
  }
  const content = editorState.getCurrentContent();
  const block = content.getBlockForKey(selection.getAnchorKey());
  return blockKeyStore.includes(block.getKey());
};

const deleteCommands = [
  'backspace',
  'backspace-word',
  'backspace-to-start-of-line',
  'delete',
  'delete-word',
  'delete-to-end-of-block',
];

export interface FocusEditorPluginConfig {
  theme?: FocusPluginTheme;
}

type FocusEditorPlugin = EditorPlugin & {
  decorator: ReturnType<typeof createDecorator>;
};

function forceSelection(editorState: EditorState): EditorState {
  // By forcing the selection the editor will trigger the blockRendererFn which is
  // necessary for the blockProps containing isFocus to be passed down again.
  // EditorState.forceSelection is not used as it will force the focus to true which is not
  // correct if this call comes from onBlur
  return EditorState.set(editorState, {
    selection: editorState.getSelection(),
    forceSelection: true,
    nativelyRenderedContent: null,
    inlineStyleOverride: null,
  });
}

export default (config: FocusEditorPluginConfig = {}): FocusEditorPlugin => {
  const blockKeyStore = createBlockKeyStore();
  const theme = config.theme ? config.theme : defaultTheme;
  let lastSelection: SelectionState | undefined;
  let lastContentState: ContentState | undefined;

  return {
    handleReturn: (event, editorState, { setEditorState }) => {
      // if a focusable block is selected then overwrite new line behavior to custom
      if (focusableBlockIsSelected(editorState, blockKeyStore)) {
        setEditorState(insertNewLine(editorState));
        return 'handled';
      }
      return 'not-handled';
    },

    handleKeyCommand: (
      command,
      editorState,
      eventTimeStamp,
      { setEditorState }
    ) => {
      if (
        deleteCommands.includes(command) &&
        focusableBlockIsSelected(editorState, blockKeyStore)
      ) {
        const key = editorState.getSelection().getStartKey();
        const newEditorState = removeBlock(editorState, key);
        if (newEditorState !== editorState) {
          setEditorState(newEditorState);
          return 'handled';
        }
      }
      if (command === 'space' && focusableBlockIsSelected(editorState, blockKeyStore)) {
        return 'handled';
      }
      return 'not-handled';
    },

    onChange: (editorState) => {
      // in case the content changed there is no need to re-render blockRendererFn
      // since if a block was added it will be rendered anyway and if it was text
      // then the change was not a pure selection change
      const contentState = editorState.getCurrentContent();
      if (!contentState.equals(lastContentState!)) {
        lastContentState = contentState;
        return editorState;
      }
      lastContentState = contentState;

      // if the selection didn't change there is no need to re-render
      const selection = editorState.getSelection();
      if (lastSelection && selection.equals(lastSelection)) {
        lastSelection = editorState.getSelection();
        return editorState;
      }

      // Note: Only if the previous or current selection contained a focusableBlock a re-render is needed.
      const focusableBlockKeys = blockKeyStore.getAll();
      if (lastSelection) {
        const lastBlockMapKeys = getBlockMapKeys(
          contentState,
          lastSelection.getStartKey(),
          lastSelection.getEndKey()
        );
        if (lastBlockMapKeys.some((key) => focusableBlockKeys.includes(key!))) {
          lastSelection = selection;
          return forceSelection(editorState);
        }
      }

      const currentBlockMapKeys = getBlockMapKeys(
        contentState,
        selection.getStartKey(),
        selection.getEndKey()
      );
      if (
        currentBlockMapKeys.some((key) => focusableBlockKeys.includes(key!))
      ) {
        lastSelection = selection;
        return forceSelection(editorState);
      }

      return editorState;
    },

    // TODO edgecase: if one block is selected and the user wants to expand the selection using the shift key
    keyBindingFn(evt, { getEditorState, setEditorState }) {
      const editorState = getEditorState();
      // TODO match by entity instead of block type
      if (focusableBlockIsSelected(editorState, blockKeyStore)) {
        // space
        if (evt.keyCode === 32) {
          return 'space';
        }

        // arrow left
        if (evt.keyCode === 37) {
          setSelection(getEditorState, setEditorState, 'up', evt);
        }
        // arrow right
        if (evt.keyCode === 39) {
          setSelection(getEditorState, setEditorState, 'down', evt);
        }
        // arrow up
        if (evt.keyCode === 38) {
          setSelection(getEditorState, setEditorState, 'up', evt);
        }
        // arrow down
        if (evt.keyCode === 40) {
          setSelection(getEditorState, setEditorState, 'down', evt);
          return undefined;
        }
      }

      // Don't manually overwrite in case the shift key is used to avoid breaking
      // native behaviour that works anyway.
      if (evt.shiftKey) {
        return undefined;
      }

      // arrow left
      if (evt.keyCode === 37) {
        // Covering the case to select the before block
        const selection = editorState.getSelection();
        const selectionKey = selection.getAnchorKey();
        const beforeBlock = editorState
          .getCurrentContent()
          .getBlockBefore(selectionKey);
        // only if the selection caret is a the left most position
        if (
          beforeBlock &&
          selection.getAnchorOffset() === 0 &&
          blockKeyStore.includes(beforeBlock.getKey())
        ) {
          setSelection(getEditorState, setEditorState, 'up', evt);
        }
      }

      // arrow right
      if (evt.keyCode === 39) {
        // Covering the case to select the after block
        const selection = editorState.getSelection();
        const selectionKey = selection.getFocusKey();
        const currentBlock = editorState
          .getCurrentContent()
          .getBlockForKey(selectionKey);
        const afterBlock = editorState
          .getCurrentContent()
          .getBlockAfter(selectionKey);
        const notAtomicAndLastPost =
          currentBlock.getType() !== 'atomic' &&
          currentBlock.getLength() === selection.getFocusOffset();
        if (
          afterBlock &&
          notAtomicAndLastPost &&
          blockKeyStore.includes(afterBlock.getKey())
        ) {
          setSelection(getEditorState, setEditorState, 'down', evt);
        }
      }

      // arrow up
      if (evt.keyCode === 38) {
        // Covering the case to select the before block with arrow up
        const selectionKey = editorState.getSelection().getAnchorKey();
        const beforeBlock = editorState
          .getCurrentContent()
          .getBlockBefore(selectionKey);
        if (beforeBlock && blockKeyStore.includes(beforeBlock.getKey())) {
          setSelection(getEditorState, setEditorState, 'up', evt);
        }
      }

      // arrow down
      if (evt.keyCode === 40) {
        // Covering the case to select the after block with arrow down
        const selectionKey = editorState.getSelection().getAnchorKey();
        const afterBlock = editorState
          .getCurrentContent()
          .getBlockAfter(selectionKey);
        if (afterBlock && blockKeyStore.includes(afterBlock.getKey())) {
          setSelection(getEditorState, setEditorState, 'down', evt);
        }
      }
      return undefined;
    },

    // Wrap all block-types in block-focus decorator
    blockRendererFn: (contentBlock, { getEditorState, setEditorState }) => {
      // This makes it mandatory to have atomic blocks for focus but also improves performance
      // since all the selection checks are not necessary.
      // In case there is a use-case where focus makes sense for none atomic blocks we can add it
      // in the future.
      if (contentBlock.getType() !== 'atomic') {
        return undefined;
      }

      const editorState = getEditorState();
      const isFocused =
        editorState.getSelection().getHasFocus() &&
        blockInSelection(editorState, contentBlock.getKey());

      return {
        props: {
          isFocused,
          isCollapsedSelection: editorState.getSelection().isCollapsed(),
          setFocusToBlock: () => {
            setSelectionToBlock(getEditorState, setEditorState, contentBlock);
          },
        },
      };
    },

    decorator: createDecorator({ theme, blockKeyStore }),
  };
};
