'use strict'

// Container for text editor and white board.
//const React =  require('react');
//const ReactDOM = require('react-dom');

class Container extends React.Component {
    constructor() {
        super();
        this.state={
          trick: "Click me or Lose!"
        }
    }

    render() {
      return(
        <button onClick={() => this.setState({trick: this.props.trick})}>
          {this.state.trick}
        </button>
        <div style={float: 'left'}>
        </div>

        <div style={flaot: 'right'}>
        </div>
      );
    }
}

module.export = Container;

let trick = "You Lose! Noooooob!!!";
ReactDOM.render(
  <Container trick={trick}/>,
  document.getElementById('container')
);
