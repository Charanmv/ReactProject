   import React, { useState } from 'react'

const Array = () => {
    const [array, setArray] = useState([])

    const add = () => {
        setArray([
            ...array,
            {
                id: array.length,
                value: Math.random() * 10 + 1
            }
        ])
    }
  return (
    <div>
      <button onClick={add}>Add</button>
        <ul>
            {array.map(arr => (
                <div>
                    <li>{arr.id} - {arr.value}</li>
                </div>
            ))}
        </ul>
    </div>
  )
}

export default Array
