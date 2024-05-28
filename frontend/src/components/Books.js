const BookDetails = ({ book }) => {

    return (
      <div className="book-details">
        <img src={book.imageURL || 'https://via.placeholder.com/300x400?text=Book+Image'} alt={book.book} />
        <h4>{book.book}</h4>
        <p>Written by {book.author}</p>
        <p className="price">Price: {book.price}</p>
        <p className="description">Description: {book.description}</p>
      </div>
    )
  }
  
  export default BookDetails;
