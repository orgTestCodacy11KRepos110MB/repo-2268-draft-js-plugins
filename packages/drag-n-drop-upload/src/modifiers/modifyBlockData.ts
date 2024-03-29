import { EditorState } from 'draft-js';

export default function modifyBlockData(
  editorState: EditorState,
  key: string,
  data: Record<string, unknown>
): EditorState {
  const currentContentState = editorState.getCurrentContent();

  //const block = currentContentState.getBlockForKey(key);
  //const entityKey = block.getEntityAt(0)
  currentContentState.mergeEntityData(key, data);

  return EditorState.forceSelection(
    editorState,
    editorState.getCurrentContent().getSelectionAfter()
  );
}
