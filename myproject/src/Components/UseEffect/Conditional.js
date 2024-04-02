import React, { useEffect, useState } from 'react'

const Conditional = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    const inc = () => {
        setCount(count + 1)
        console.log(name)
    }

    useEffect(() => {
        document.title = count
        console.log("render")
    },[count])

  return (
    <div>
        <h1>Count: {count}</h1>
        <label>Count: </label>
      <input type='text' placeholder='enter name'
      onChange={e => setName(e.target.value)}></input><br></br>
      <button onClick={inc}>Increment</button>
    </div>
  )
}

export default Conditional
