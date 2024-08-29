// src/components/NewPost.js
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function NewPost() {
  const [topic, setTopic] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [timeLimit, setTimeLimit] = useState(60)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const token = localStorage.getItem('auth-token')
      await axios.post(
        'http://localhost:3000/newpost',
        { topic,
          message,
          timeLimit: 60 }, 
        {
          headers: {
            'auth-token': token
          }
        }
      )

      alert('Post created successfully!')
      navigate('/homepage') 
    } catch (error) {
      setError('Error creating post. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='newpost-container'>
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Topic"
            required
          />
        </div>
        <div>
          <input
            type="number"
            value={timeLimit}
            onChange={(e) => setTimeLimit(Number(e.target.value))} 
            placeholder="Time Limit (minutes)"
            required
          />
        </div>
        <div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Posting...' : 'Create Post'}
        </button>
        {error && <div className="error-message">{error}</div>}
      </form>
    </div>
  )
}

export default NewPost
