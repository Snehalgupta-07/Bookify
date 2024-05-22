import { useState } from 'react'


const SignupForm = () => {
 

  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const auth = {email, username, password}
    
    const response = await fetch('/api/event_m/signup', {
      method: 'POST',
      body: JSON.stringify(auth),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setEmail('')
      setUsername('')
      setPassword('')
      console.log('Signup successfull:', json)
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

      <label>Username:</label>
      <input 
        type="string" 
        onChange={(e) => setUsername(e.target.value)} 
        value={username}
      />

      <label>Password</label>
      <input 
        type="string" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

      <button>Signup</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default SignupForm