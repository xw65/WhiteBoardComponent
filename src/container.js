'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import TextEditor from './textEditor'

const styles = {
  root: {
    fontFamily: '\'Helvetica\', sans-serif',
    padding: 20,
    width: 600,
  },
  editor: {
    border: '1px solid #ccc',
    cursor: 'text',
    minHeight: 80,
    padding: 10,
  },
  button: {
    marginTop: 10,
    textAlign: 'center',
  },
};

export default class Container extends React.Component {
    constructor() {
        super();
        this.state={
        }
    }

    render() {
      return(
        <div>
          <TextEditor id="text-editor" />
        </div>
      );
    }
}
