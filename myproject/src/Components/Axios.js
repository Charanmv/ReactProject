import React, { useState } from 'react'
import axios from 'axios'

const Axios = () => {
    const [results, setResult] = useState([]);

    const getData = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos/')
        .then(res => 
            {
                console.log(res.data)
                setResult(res.data)
            })
        .catch(err => console.log(err))
    }

  return (
    <div>
      <h1>To get data from server use Axios - npm install axios</h1>
      <button onClick={getData}>Get Data</button>
      <ol>
        {results.map(result => (
            <li key={result.id}>{result.title}</li>
        ))}
      </ol>
    </div>
  )
}

export default Axios
