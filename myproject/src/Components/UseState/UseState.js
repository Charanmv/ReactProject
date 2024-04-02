import React, { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(10)
    
    const inc = () => {
        setCount(count + 1)
    }
  return (
    <div>
      <h1>Use State hooks method</h1>
      <h1>count value: {count}</h1>
      <button onClick={inc}>Increment</button>
    </div>
  )
}

export default UseState
