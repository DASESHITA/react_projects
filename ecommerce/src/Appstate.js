import React, { Component } from 'react';
import Propcomponent from './components/AppUseState';

export default class App extends Component {
  state=
  {
    tName:"Eshita ",
    subject: "FullStackDevelopment",
    section: "Section D"
  }
  render() {
    return (
      <div>
         I am {this.state.tName} I am a {this.state.subject} student
        <Propcomponent section ={this.state.section} />
      </div>
    );
  }
}