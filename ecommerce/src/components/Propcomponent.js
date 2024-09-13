import React, { Component } from 'react'

export default class Propcomponent extends Component {
  render() {
    return (
      <div>
        I am studying {this.props.section}
      </div>
    )
  }
}