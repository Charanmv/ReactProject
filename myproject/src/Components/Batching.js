import React, { useState } from 'react'

export default function Batching() {
    const [counter, setCounter] = useState(20)
    const [clicked, setClicked] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
        setClicked(clicked + 1)
    }
    const decrement = () => {
        setCounter(counter - 1)
        setClicked(clicked - 1)
    }
  return (
    <div>
        <h1>{counter} - {clicked}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}
