import React from 'react'

const Age = (props) => {
    console.log("render age")
  return (
    <div>
      <h1>Age is : {props.age}</h1>
    </div>
  )
}

export default React.memo(Age)
