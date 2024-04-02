
import React, {useState} from 'react'

const PrevState = () => {
    const [count, setCount] = useState(0)
    
    const incBy5 = () => {
        for(var i=0; i<5; i++){
            setCount(prevcount => prevcount + 1)
        }
    }
  return (
    <div>
        <h1>count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={incBy5}>Increment by 5</button>
    </div>
  )
}

export default PrevState
