import React, { Component } from 'react'
import PrevState from './PrevState'

export class PrevStateClass extends Component {
    constructor(){
        super()
        this.state = {count : 0}
    }
    
    inc = () => {
        this.setState(PrevState => {
            return {
                count : PrevState.count + 1
            }
        })
    }

  render() {
    return (   
      <div>
        <h1>count: {this.state.count}</h1>
        <button onClick={this.inc}>Increment</button>
      </div>
    )
  }
}

export default PrevStateClass
