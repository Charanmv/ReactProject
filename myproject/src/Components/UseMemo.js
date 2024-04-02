import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [count, setCount] = useState(0)
    const [list, setList] = useState([])
    // const cal = expCal(count)
    const cal = useMemo(() => expCal(count, [count]))

    const inc = () => {
        setCount((count) => count + 1)
    }
    const addItem = () => {
        setList((list) => [...list, "added item"])
    }
  return (
    <div>
        <ul>
            {list.map((item, index) => {
                return <li key={index}>{item}</li>
            })}
        </ul>
        <button onClick={addItem}>Add Item</button>
        <h1>Count: {count}</h1>
      <button onClick={inc}>Increment</button>
      <h1>Calculation : {cal}</h1>
    </div>
  )
}

function expCal(count) {
    console.log("this is exp cal")
    for(var i=0; i<10; i++){
        count = count + 1
    }
    return count
}

export default UseMemo
