import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Signup(){
    const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const handleSubmit = async(e)=>{
    e.preventDefault()
    setLoading(true)
    setError('')
  
  try {
    await axios.post('http://localhost:3000/api/signup', {
      firstname,
      lastname,
      username,
      email,
      password
    })
    alert('Signup Successful!')
    navigate('/login')
    }catch(err){
        setError('Error signing up. Please wait')
    }finally{
        setLoading(false)
    }
}
return (
    <div className='signup-container'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            placeholder="First Name"
            required
          />
        </div>
        <div>
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            placeholder="Last Name"
            required
          />
        </div>
        <div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
        </div>
        <div>
          <input
            type="email"
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
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
        {error && <div className="error-message">{error}</div>}
      </form>
    </div>
  )
}

export default Signup