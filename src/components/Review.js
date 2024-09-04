
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Review() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        const token = localStorage.getItem('auth-token')
        const response = await axios.get('http://localhost:3000/review/homepage', {
          headers: {
            'auth-token': token
          }
        })

        setPosts(response.data.Post || [])
        setLoading(false)
      } catch (err) {
        setError('Failed to load posts. Please try again later.')
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  return (
    <div className="review-container">
      <h2>Review</h2>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        Array.isArray(posts) && posts.length > 0 ? (
          <ul>
            {posts.map(post => (
              <li key={post._id}>
               <Link to={`/post/${post._id}`}>
                  <h3>{post.title}</h3>
                </Link>
                <p><strong>Likes:</strong> {post.likes}</p>
                <p><strong>Dislikes:</strong> {post.dislike}</p>
                <p><strong>Status:</strong> {post.expired}</p>
                <p><strong>Poster:</strong> {post.poster}</p>
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

export default Review
