'use strict'

import React from 'react';
import ReactDOM from 'react-dom';

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
          <button onClick={() => this.setState({trick: this.props.trick})}>
            {this.state.trick}
          </button>
        </div>
      );
    }
}
