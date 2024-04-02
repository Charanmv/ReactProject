import React from 'react'
import PropsFunc2 from './PropsFunc2'

const PropsFunc1 = (props) => {
  var name = "Allen"
  var age = 50
  return (
    <div>
      <h1>Functional Component</h1>
      <h1>Passing props from one component to another - {name} - {age}</h1>
      <hr></hr>
      <PropsFunc2 Pname={name} Page={age} ></PropsFunc2>
    </div>
  )
}

export default PropsFunc1
