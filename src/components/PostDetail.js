// src/components/PostDetail.js
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function PostDetail() {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true)
        const token = localStorage.getItem('auth-token')
        const response = await axios.get(`http://localhost:3000/post/${id}`, {
          headers: {
            'auth-token': token
          }
        })

        setPost(response.data)
        setLoading(false)
      } catch (err) {
        setError('Failed to load post. Please try again later.')
        setLoading(false)
      }
    }

    fetchPost()
  }, [id])

  const handleLike = async (postId) => {
    try {
      const token = localStorage.getItem('auth-token')
      const response = await axios.post(`http://localhost:3000/post/${postId}/like`, {}, {
        headers: {
          'auth-token': token
        }
      })

      setPost(response.data.details)  // Update post data after liking
      alert('You liked the post!')
    } catch (error) {
      console.error('Error liking post:', error)
      alert('Failed to like the post. Please try again.')
    }
  }

  const handleDislike = async (postId) => {
    try {
      const token = localStorage.getItem('auth-token')
      const response = await axios.post(`http://localhost:3000/post/${postId}/dislike`, {}, {
        headers: {
          'auth-token': token
        }
      })

      setPost(response.data.details)  // Update post data after disliking
      alert('You disliked the post!')
    } catch (error) {
      console.error('Error disliking post:', error)
      alert('Failed to dislike the post. Please try again.')
    }
  }

  return (
    <div className="post-detail-container">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        post ? (
          <div>
            <h2>{post.title}</h2>
            <p><strong>Message:</strong> {post.message}</p>
            <p><strong>Date Posted:</strong> {new Date(post.dateposted).toLocaleString()}</p>
            <p><strong>Expiration Date:</strong> {new Date(post.expireDate).toLocaleString()}</p>
            <p><strong>Status:</strong> {post.expired}</p>
            <p><strong>Poster:</strong> {post.poster}</p>
            <p><strong>Likes:</strong> {post.likes}</p>
            <p><strong>Dislikes:</strong> {post.dislike}</p>
            
            {/* Display people who liked the post */}
            <div className="like-list-section">
              <h3>People who liked this post:</h3>
              {post.likeList.length > 0 ? (
                <ul>
                  {post.likeList.map((user, index) => (
                    <li key={index}>{user}</li>
                  ))}
                </ul>
              ) : (
                <p>No one has liked this post yet.</p>
              )}
            </div>

            {/* Display people who disliked the post */}
            <div className="dislike-list-section">
              <h3>People who disliked this post:</h3>
              {post.dislikeList.length > 0 ? (
                <ul>
                  {post.dislikeList.map((user, index) => (
                    <li key={index}>{user}</li>
                  ))}
                </ul>
              ) : (
                <p>No one has disliked this post yet.</p>
              )}
            </div>

            {/* Comments Section */}
            <div className="comments-section">
              <h3>Comments</h3>
              {post.comments.length > 0 ? (
                <ul>
                  {post.comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                  ))}
                </ul>
              ) : (
                <p>No comments yet.</p>
              )}
            </div>

            {/* Interaction Buttons */}
            <div className="interaction-buttons">
              <button onClick={() => handleLike(post._id)}>Like</button>
              <button onClick={() => handleDislike(post._id)}>Dislike</button>
            </div>
          </div>
        ) : (
          <p>Post not found.</p>
        )
      )}
    </div>
  )
}

export default PostDetail
