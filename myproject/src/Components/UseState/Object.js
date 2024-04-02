import React, { useState } from 'react'

const Object = () => {
    const [obj, setObj] = useState({name: '', age: ''})

  return (
    <div>
        <h1>name: {obj.name} </h1>
        <h1> age: {obj.age}</h1>
      <input type='text' placeholder='Enter name'
      onChange={e => setObj({...obj, name: e.target.value})}></input>
      <br></br>
      <input type='text' placeholder='Enter age'
      onChange={e => setObj({...obj, age: e.target.value})}></input>
    </div>
  )
}

export default Object
