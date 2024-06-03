import { useEffect, useState } from "react";

const BookDescription = ({ book }) => {
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
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
    
  }, [book._id]);

  const backendUrl = "http://localhost:4000/api/event_m";

  return (
    <div className="book-description">
      {bookData && bookData.image && (
        <img src={`${backendUrl}${bookData.image}`} alt={bookData.book} />
      )}
      {bookData && (
        <>
          <h3>Book: {bookData.book}</h3>
          <p>Written by {bookData.author}</p>
          <p>Price: {bookData.price}</p>
          <p>Contact No.: {bookData.contact}</p>
          <p>Description: {bookData.description}</p>
        </>
      )}
    </div>
  );
};

export default BookDescription;
