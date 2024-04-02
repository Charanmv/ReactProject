import React, { Component } from 'react'

export class RegComp extends Component {
  render() {
    console.log("Regular component")
    return (
      <div>
        <h1>Regular Component</h1>
        <h1>{this.props.name}</h1>
      </div>
    )
  }
}

export default RegComp
