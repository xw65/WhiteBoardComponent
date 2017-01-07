// text editor component
import React from 'react'
import ReactDOM from 'react-dom'
import {Editor, EditorState} from 'draft-js';

const editorStyle = {
  border: '1px solid #ccc',
  cursor: 'text',
  minHeight: 80,
  fontFamily: '\'Helvetica\', sans-serif',
  padding: 20,
  width: 600,
};

export default class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
  }
  render() {
    return <Editor editorState={this.state.editorState} onChange={this.onChange}  style={editorStyle} placeholder="Enter some text..." ref="editor" />;
  }
};
