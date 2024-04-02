import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0)
    
    const inc = () => {
        setCount(count + 1)
        document.title = count
    }

    useEffect(() => {
        document.title = count
    })
  return (
    <div>
        <h1>Value of count - {count}</h1>
      <button onClick={inc}>Increment</button>
    </div>
  )
}

export default UseEffect
