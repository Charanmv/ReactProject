import React, { Component } from 'react'

export default class State extends Component {
    constructor(){
        super()
        this.state = {count: 0}
    }
    inc = () => {
        this.setState({count: this.state.count + 1})
    }
    dec = () => {
        this.setState({count: this.state.count - 1})
    }
    reset = () => {
        this.setState({count: 0})
    }
  render() {
    return (
      <div>
        <h1>State variables can be created only in class Component</h1>
        <button onClick={this.inc}>Increment</button>
        <button onClick={this.dec}>Decrement</button>
        <button onClick={this.reset}>Reset</button>
        <h3>value of count is : {this.state.count}</h3>
      </div>
    )
  }
}
