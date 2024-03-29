import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import Editor from '@draft-js-plugins/editor';
import createLinkifyPlugin from '@draft-js-plugins/linkify';
import linkifyIt from 'linkify-it';
import tlds from 'tlds';
import editorStyles from './editorStyles.module.css';

const linkifyPlugin = createLinkifyPlugin({
  component(props) {
    // eslint-disable-next-line no-alert, jsx-a11y/anchor-has-content
    return <a {...props} onClick={() => alert('Clicked on Link!')} />;
  },
  customExtractLinks: (text) =>
    linkifyIt().tlds(tlds).set({ fuzzyEmail: false }).match(text),
});
const plugins = [linkifyPlugin];

export default class CustomMentionEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  focus = () => {
    this.editor.focus();
  };

  render() {
    return (
      <div className={editorStyles.editor} onClick={this.focus}>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={plugins}
          ref={(element) => {
            this.editor = element;
          }}
        />
      </div>
    );
  }
}
