import React from 'react'
import {PropTypes} from 'prop-types'

const Child = (props) => {
  return (
    <div>
    <h1>{props.Pname} - {props.Page} - {props.Pcompany}</h1>
    </div>
  )
}

Child.propTypes = {
    Pname: PropTypes.string,
    Page: PropTypes.number,
    Pcompany: PropTypes.string
}

export default Child
