import React from 'react'

const Salary = (props) => {
    console.log("I am salary")
  return (
    <div>
      <h1>Salary: {props.salary}</h1>
    </div>
  )
}

export default React.memo(Salary)
