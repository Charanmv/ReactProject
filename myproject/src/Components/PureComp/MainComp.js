import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'

export class MainComp extends Component {
    constructor(){
        super()
        this.state = { name: 'Jackson'}
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({name: 'Jackson'})
        }, 2000);    
    }
  render() {
    console.log("Main component *********************")
    return (
      <div>
        <h1>Main Component </h1>
        <RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp>
      </div>
    )
  }
}

export default MainComp
