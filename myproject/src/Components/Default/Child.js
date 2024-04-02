import React from 'react'

const Child = (props) => {
  return (
    <div>
      <h1>This is Child Component</h1>
      <h1>{props.Pname} - {props.Page} - {props.Pcompany}</h1>
    </div>
  )
}

Child.defaultProps = {
    Pname: "Jill",
    Page: 55,
    Pcompany: "Google"
}

export default Child
