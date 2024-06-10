import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user";

const BookDetails = ({ book }) => {
  const navigate = useNavigate();
  const { setId } = useContext(UserContext);
  const backendUrl = "http://localhost:4000/api/event_m";

  const handleViewMore = () => {
    setId(book._id);
    navigate("/book-description", { state: { book } });
  };

  return (
    <div className="book-details">
      {book.image && <img src={`${backendUrl}${book.image}`} alt={book.book} />}
      <h4>{book.book}</h4>
      <p>Written by {book.author}</p>
      <p className="price">Price: {book.price}</p>
      
      
      <button onClick={handleViewMore}>View More</button>
    </div>
  );
};

export default BookDetails;
