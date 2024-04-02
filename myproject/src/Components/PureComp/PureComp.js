import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
  render() {
    console.log("Pure component")
    return (
      <div>
        <h1>Pure Component</h1>
        <h1>{this.props.name}</h1>
      </div>
    )
  }
}

export default PureComp
