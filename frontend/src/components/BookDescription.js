import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const BookDescription = () => {
  const location = useLocation();
  const { book } = location.state || {};
  const [bookData, setBookData] = useState(book);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchBook = async () => {
      if (!book || !book._id) return;

      try {
        const response = await fetch(`/api/event_m/${book._id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch book");
        }
        const data = await response.json();
        setBookData(data);
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    };

    fetchBook();
  }, [book]);

  const handleAddToCart = async (e) => {
    e.preventDefault();

    const bookDetails = {
      book: bookData.book,
      author: bookData.author,
      price: bookData.price,
      genre: bookData.genre,
      description: bookData.description,
      contact: bookData.contact,
      image: bookData.image,  
    };

    try {
      const response = await fetch('/api/event_m/cart/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookDetails),
      });
      const result = await response.json();

      if (!response.ok) {
        setMessage("Book cannot be added to the cart");
        console.error("Error:", result.message);
      } else {
        setMessage("Book added to the cart successfully");
        console.log("Success:", result.message);
      }
    } catch (err) {
      setMessage("Request failed");
      console.error('Request failed:', err);
    }
  };

  const backendUrl = "http://localhost:4000/api/event_m";

  return (
    <div className="book-description">
      {bookData && bookData.image && (
        <img src={`${backendUrl}${bookData.image}`} alt={bookData.book} />
      )}
      {bookData && (
        <div className="book-description_details">
          <h3>Book: {bookData.book}</h3>
          <h3>Written by {bookData.author}</h3>
          <p className="price">Price: {bookData.price}</p>
          <p>Genre: {bookData.genre}</p>
          <p className="contact">Owner's Contact No.: {bookData.contact}</p>
          <p className="description">Description: {bookData.description}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
          {message && <p>{message}</p>}
        </div>
      )}
    </div>
  );
};

export default BookDescription;
