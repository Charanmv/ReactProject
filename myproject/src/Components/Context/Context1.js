import React, { useState } from 'react'

const Context1 = () => {
    const [name, setName] = useState('John')
  return (
    <div>
      <h1>Here is my context component</h1>
      <h1>{name}</h1>
      <hr></hr>
      <Header Pname={name}></Header>
    </div>
  )
}

const Header = (props) => {
    return (
        <div>
            <h1>Header component</h1>
            <hr></hr>
            <Nav Pname={props.Pname}></Nav>
        </div>
    )
}

const Nav = (props) => {
    return (
        <div>
            <h1>Nav component</h1>
            <hr></hr>
            <Main Pname={props.Pname}></Main>
        </div>
    )
}

const Main = (props) => {
    return (
        <div>
            <h1>Main component</h1>
            <hr></hr>
            <Footer Pname={props.Pname}></Footer>
        </div>
    )
}

const Footer = (props) => {
    return (
        <div>
            <h1>Footer component</h1>
            <h1>{props.Pname}</h1>
        </div>
    )
}

export default Context1
