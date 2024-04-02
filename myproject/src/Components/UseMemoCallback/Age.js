import React from 'react'

const Age = (props) => {
    console.log("I am Age")
  return (
    <div>
      <h1>Age: {props.age}</h1>
    </div>
  )
}

export default React.memo(Age)
