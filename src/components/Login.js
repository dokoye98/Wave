import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()


  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try{
      console.log('check')
        const response = await axios.post('http://localhost:3000/api/login', {
            email,
            password
          })
          localStorage.setItem('auth-token', response.data['auth-token'])
          alert(response.data['auth-token'])
          navigate('/newpost')  
    }catch (error) {
        setError('Invalid credentials. Please try again.')
      } finally {
        setLoading(false)
      }
    }


    return (
        <div className='login-container'>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </div>
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </div>
            <button type="submit" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
            {error && <div className="error-message">{error}</div>}
          </form>
        </div>
      )
    }
    
    export default Login