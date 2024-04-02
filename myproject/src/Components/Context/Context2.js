import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext()

const Context2 = () => {
    const [name, setName] = useState('John')
  return (
    <UserContext.Provider value={name}>
        <h1>{name}</h1>
      <Header></Header>
    </UserContext.Provider>
  )
}

const Header = () => {
    return (
        <div>
            <h1>Header component</h1>
            <hr></hr>
            <Nav></Nav>
        </div>
    )
}

const Nav = () => {
    return (
        <div>
            <h1>Nav component</h1>
            <hr></hr>
            <Main></Main>
        </div>
    )
}

const Main = () => {
    return (
        <div>
            <h1>Main component</h1>
            <hr></hr>
            <Footer></Footer>
        </div>
    )
}

const Footer = () => {
    const user = useContext(UserContext)
    return (
        <div>
            <h1>Footer component</h1>
            <h1>{user}</h1>
        </div>
    )
}

export default Context2
