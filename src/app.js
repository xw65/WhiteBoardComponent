'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import Container from './container'

let trick = "You Lose! Noooooob!!!";
ReactDOM.render(
  <Container trick={trick}/>,
  document.getElementById('container')
);
