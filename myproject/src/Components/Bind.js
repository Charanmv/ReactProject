import React, { Component } from 'react'

export class Bind extends Component {
    constructor(){
        super()
        this.state = {count: 0}
        this.call = this.call.bind(this)
    }
    call() {
      this.setState({count: this.state.count + 1})
  }
  render() {
    return (
      <div>
        <h1>Count : {this.state.count} </h1>
        <button onClick={this.call}>Click me</button>
      </div>
    )
  }
}

export default Bind
