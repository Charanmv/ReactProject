import React from 'react'
import Child from './ChildProps'

const ParentProps = () => {
    var name = "Kate"
    var age  = 50
    var company = "Dell"
  return (
    <div>
      <Child Pname={name} Page={age} Pcompany={company}></Child>
    </div>
  )
}

export default ParentProps
