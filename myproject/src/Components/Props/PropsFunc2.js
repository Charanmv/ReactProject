import React from 'react'
import PropsClass1 from './PropsClass1'

const PropsFunc2 = (props) => {
  return (
    <div>
      
      <h1>Received props from other component</h1>
      <h1>{props.Pname} - {props.Page}</h1>
      <hr></hr>
      <PropsClass1></PropsClass1>
    </div>
  )
}

export default PropsFunc2
