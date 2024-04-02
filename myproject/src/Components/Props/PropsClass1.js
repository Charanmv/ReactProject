import React, { Component } from 'react'
import PropsClass2 from './PropsClass2'

export class PropsClass1 extends Component {
    constructor(){
        super()
        this.state = {name: "Jack", age: 30}
    }

  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <h1>Passing props from one component to another - {this.state.name} - {this.state.age}</h1>
        <hr></hr>
        <PropsClass2 Pname={this.state.name} Page={this.state.age} ></PropsClass2>
      </div>
    )
  }
}

export default PropsClass1
