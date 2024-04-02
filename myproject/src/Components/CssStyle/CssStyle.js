import React from 'react'
import './style.css'
import style from './style.module.css'

const CssStyle = () => {
    var myStyle = {
        color: "white",
        backgroundColor: "Green"
    }
  return (
    <div>
      <h1>There are 3 types of styling</h1>
      <ul>
        <li>Inline styling</li>
        <li>Internal styling</li>
        <li>External styling</li>
      </ul>

      <h2 style={{color: "white", backgroundColor: "red"}}>This is Inline styling</h2>
      <h2 style={myStyle}>This is Internal styling</h2>
      <h2>This is External styling</h2>
      {/* <h1 className={style.first}>Test</h1>
      <h1 className={ `${style.first}` `${style.second}` }>Module format style import</h1> */}
    </div>
  )
}

export default CssStyle
