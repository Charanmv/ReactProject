import axios from 'axios'
import React, { useEffect, useState } from 'react'

const FetchingData = () => {
    const [posts, setPosts] = useState([])
    const [id, setId] = useState('')

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => {
            console.log(res.data)
            setPosts(res.data)
        })
        .catch((err) => console.log(err))
    }, [])
  return (
    <div>
      <ul>
        {posts.map(post => (
            <li key={post.id}>{post.id} - {post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default FetchingData
