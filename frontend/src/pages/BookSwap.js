import React, { useState } from 'react';


const BookSwap = () => {
    const [books, setBooks] = useState([]);
    const [swapRequests, setSwapRequests] = useState([]);
    const [newBook, setNewBook] = useState({ title: '', author: '', condition: '', description: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewBook({ ...newBook, [name]: value });
    };

    const addBook = () => {
        setBooks([...books, newBook]);
        setNewBook({ title: '', author: '', condition: '', description: '' });
    };

    const sendSwapRequest = (book) => {
        setSwapRequests([...swapRequests, book]);
    };

    return (
        <div className="swap_books">
            <div className="add_book">
                <h2>List a Book for Swap</h2>
                <input type="text" name="title" value={newBook.title} onChange={handleInputChange} placeholder="Title" />
                <input type="text" name="author" value={newBook.author} onChange={handleInputChange} placeholder="Author" />
                <input type="text" name="condition" value={newBook.condition} onChange={handleInputChange} placeholder="Condition" />
                <textarea name="description" value={newBook.description} onChange={handleInputChange} placeholder="Description"></textarea>
                <button onClick={addBook}>Add Book</button>
            </div>

            <div className="browse_books">
                <h2>Browse Available Books</h2>
                <div className="books_list">
                    {books.map((book) => (
                        <div key={book._id} className="book_card">
                            <h3>{book.title}</h3>
                            <p>by {book.author}</p>
                            <p>Condition: {book.condition}</p>
                            <p>{book.description}</p>
                            <button onClick={() => sendSwapRequest(book)}>Request Swap</button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="swap_requests">
                <h2>My Swap Requests</h2>
                <div className="requests_list">
                    {swapRequests.map((book) => (
                        <div key={book._id} className="request_card">
                            <h3>{book.title}</h3>
                            <p>by {book.author}</p>
                            <p>Condition: {book.condition}</p>
                            <p>{book.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BookSwap;
