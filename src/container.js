'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import TextEditor from './textEditor'

export default class Container extends React.Component {
    constructor() {
        super();
        this.state={
          trick: "Click me or Lose!"
        }
    }

    render() {
      return(
        <div>
          <div>
            <TextEditor />
          </div>
        </div>
      );
    }
}
