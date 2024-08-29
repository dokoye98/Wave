import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Talks() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        const token = localStorage.getItem('auth-token')
        console.log(token)
        const response = await axios.get('http://localhost:3000/talks/homepage', {
          headers: {
            'auth-token': token
          }
        })

        setPosts(response.data.Post)
        setLoading(false)
      } catch (err) {
        setError('Failed to load posts. Please try again later.')
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  return (
    <div className="talks-container">
      <h2>Talks</h2>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        Array.isArray(posts) && posts.length > 0 ? (
          <ul>
            {posts.map(post => (
              <li key={post._id}>
                <p>{post.message}</p>
                <p><strong>Likes:</strong> {post.likes}</p>
                <p><strong>Dislikes:</strong> {post.dislike}</p>
                <p><strong>Status:</strong> {post.expired}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No posts available for this topic.</p>
        )
      )}
    </div>
  )
}

export default Talks
