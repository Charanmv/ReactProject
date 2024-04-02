import React from 'react'

const Salary = (props) => {
    console.log("render salary")
  return (
    <div>
      <h1>Salary is : {props.sal}</h1>
    </div>
  )
}

export default React.memo(Salary)
