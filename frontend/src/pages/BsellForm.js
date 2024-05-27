import { useState } from "react"

const BsellForm = () => {
    const [book,setBook]=useState('');
    const [author,setAuthor]=useState('');
    const [price,setPrice]=useState('');
    const [description,setDiscription]=useState('');
    const [errors,setErrors]=useState('');

  

  const HandleSubmit = async (e) => {
    e.preventDefault()

    const input = { book, author, price , description }
    try {
      const response = await fetch('/api/event_m/book_sell', {
        method: 'POST',
        body: JSON.stringify(input),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const json = await response.json()
      
      if (!response.ok) {
        setErrors(json.errors)
        setErrors({ ...errors, form: 'Invalid input. Please try again.' })
      }
      else{
        // setErrors=useState({ email: '', password: '', form: '' });
        setBook('')
        setAuthor('')
        setPrice('')
        setDiscription('')
        
      }
    } catch (err) {
      console.error('Request failed:', err)
      setErrors({ ...errors, form: 'Failed to Add book. Please try again later.' }) 
    }
  }

  return (
    <div className="form_container">
    <form className="create" onSubmit={HandleSubmit}>
      <h3>Add Book</h3>

      <label>Book</label>
      <input
        type="text"
        onChange={(e) => setBook(e.target.value)}
        value={book}
      />
      {/* {errors.book && <div className="error">{errors.book}</div>} */}
      
      <label>Author</label>
      <input
        type="text"
        onChange={(e) => setAuthor(e.target.value)}
        value={author}
      />
      {/* {errors.password && <div className="error">{errors.password}</div>} */}

      <label>Price</label>
      <input
        type="text"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      />
      <label>Description</label>
      <input
        type="text"
        onChange={(e) => setDiscription(e.target.value)}
        value={description}
      />
      
      


      <button>Add</button>


      {errors.form && <div className="error">{errors.form}</div>} 
      </form>
      </div>
  )
}


export default BsellForm
