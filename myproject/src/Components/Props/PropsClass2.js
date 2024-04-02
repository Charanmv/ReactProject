import React, { Component } from 'react'

export class PropsClass2 extends Component {
    constructor(){
        super()
    }
  render() {
    return (
      <div>
        <h1>{this.props.Pname} - {this.props.Page}</h1>
      </div>
    )
  }
}

export default PropsClass2
