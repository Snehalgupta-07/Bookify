import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user";
import BookDescription from "./BookDescription";

const BookDetails = ({ book, bookId }) => {
  const navigate = useNavigate();
  const { setId } = useContext(UserContext);
  const backendUrl = "http://localhost:4000/api/event_m";

  const handleViewMore = () => {
    setId(book._id); // Move setId inside handleViewMore function
    navigate("/book-description", { state: { book: book } });
  }; 

  return (
    <div className="book-details">
      {book.image && <img src={`${backendUrl}${book.image}`} alt={book.book} />}
      <h4>{book.book}</h4>
      <p>Written by {book.author}</p>
      <p className="price">Price: {book.price}</p>
      <p className="description">Description: {book.description}</p>
      <p>id: {book._id}</p>
      <button onClick={handleViewMore}>View More</button>
    </div>
  );
};

export default BookDetails;
