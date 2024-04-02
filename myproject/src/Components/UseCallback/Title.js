import React from 'react'

const Title = () => {
    console.log("render title")
  return (
    <div>
      <h1>Here is the age and Salary of employee</h1>
    </div>
  )
}

export default React.memo(Title)
