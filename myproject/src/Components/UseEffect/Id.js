import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Id = () => {
    const [posts, setPosts] = useState([])
    const [id, setId] = useState('')

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => {
            console.log(res.data)
            setPosts(res.data)
        })
        .catch((err) => console.log(err))
    }, [id])
  return (
    <div>
        <input type='text' placeholder='enter id'
        onChange={e => setId(e.target.value)} value={id} ></input>
      <p>{posts.title}</p>
    </div>
  )
}

export default Id
