import React, { Component } from 'react'

export class LifecycleMethods extends Component {
    constructor(){
        super()
        console.log("I am constructor")

        this.state = {count : 0}
    }

    static getDerivedStateFromProps(){
        console.log("get derived state from props")
        return true
    }

    componentDidMount(){
        console.log("component did mount")
    }

    shouldComponentUpdate(){
        console.log("should component update")
        return true
    }
    
    componentDidUpdate(){
        console.log("component did update")
    }
    getSnapshotBeforeUpdate(){
        console.log("get snapshot before update")
        return true
    }

    componentWillUnmount(){
        console.log("component will unmount")
    }

    inc = () => {
        this.setState({count: this.state.count + 1})
    }
  render() {
    console.log("I am render method")
    return (
      <div>
        <h1>There are 3 phases in Lifecycle Methods in class Component</h1>
        <ul>
            <li>Mounting</li>
            <li>Updating</li>
            <li>Unmounting</li>
        </ul>
        <button onClick={this.inc}>To test update phase</button>
        <h1>count: {this.state.count}</h1>
        <h4>Please test the Lifecycle methods flow in console</h4>
        <h1>Mounting</h1>
        <ul>
            <li>constructor()</li>
            <li>getDerivedStateFromProps()</li>
            <li>render()</li>
            <li>componentDidMount()</li>
        </ul>
        <h1>Updating</h1>
        <ul>
            <li>getDerivedStateFromProps()</li>
            <li>shouldComponentUpdate()</li>
            <li>render()</li>
            <li>getSnapshotBeforeUpdate()</li>
            <li>componentDidUpdate()</li>
        </ul>
        <h1>Unmounting</h1>
        <ul>
            <li>componentWillUnmount()</li>
        </ul>
      </div>
    )
  }
}

export default LifecycleMethods
