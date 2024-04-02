import React from 'react'
import Child from './Child'

const Parent = () => {
    var name = "Jack"
    var age = 33
    var company = "Infosys"
    
  return (
    <div>
        <h1>This is Parent Component</h1>
      <Child Pname={name} Page={age} Pcompany={company}></Child>
      <hr></hr>
      <Child Page={age} Pcompany={company}></Child>
      <hr></hr>
      <Child Pname={name} Pcompany={company}></Child>
      <hr></hr>
      <Child Pname={name} Page={age}></Child>
      <hr></hr>
      <Child></Child>
      <hr></hr>
    </div>
  )
}

export default Parent
