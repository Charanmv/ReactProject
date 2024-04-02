import React from 'react'

const Button = ({handleClick, children}) => {
    console.log("render button")
  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  )
}

export default React.memo(Button)
