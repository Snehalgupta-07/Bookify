import { useEffect, useState } from "react"

// components
import BookDetails from "../components/Books"

const OldBooks = () => {
  const [books, setBooks] = useState(null)

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch('/api/event_m/book_sell')
      const json = await response.json()

      if (response.ok) {
        setBooks(json)
      }
    }

    fetchBooks()
  }, [])

  return (

      <div className="old_books">
        {books && books.map(book => (
          <BookDetails book={book} key={book._id} />
        ))}
      </div>

  )
}

export default OldBooks