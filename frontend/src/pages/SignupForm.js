import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../index.css'

const SignupForm = () => {
  const [email, setEmail] = useState('')
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({ email: '', username: '', password: '' })
  const navigate= useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()

    const auth = { email, username, password }

    try {
      const response = await fetch('/api/event_m/signup', {
        method: 'POST',
        body: JSON.stringify(auth),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const json = await response.json()

      if (!response.ok) {
        setErrors(json.errors)
      } else {
        // console.log(json.user)
        console.log(username)
        setErrors({ email: '', username: '', password: '' })
        setEmail('')
        setUsername('')
        setPassword('')
        navigate('/')
        console.log('Signup successful:',json)
        
      }
    } catch (err) {
      console.error('Request failed:', err)
      setErrors({ ...errors, form: 'Failed to sign up. Please try again later.' })
    }
  }

  return (
    <form className="create" onSubmit={handleSubmit}>
     
      <h3>Sign-Up</h3>

      <label>Email:</label>
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      {errors.email && <div className="error">{errors.email}</div>}

      <label>Username:</label>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      {errors.username && <div className="error">{errors.username}</div>}

      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      {errors.password && <div className="error">{errors.password}</div>}

      <button>Signup</button>
      {/* <Link to="/login">
        <h1>Login</h1>
      </Link> */}
      <a href="./login">Login</a>
     
    </form>
  )
}

export default SignupForm
