import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from '../context/user'

const BsellForm = () => {
    const [book, setBook] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState('');
    const [genre,setGenre]=useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState('');
    const [image, setImage] = useState(null);  
    const [contact,setContact]=useState('');
    const navigate = useNavigate();
    const {image1,setImage1} = useContext(UserContext);

    

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('book', book);
        formData.append('author', author);
        formData.append('price', price);
        formData.append('genre', genre);
        formData.append('description', description);
        formData.append('uimage', image); 
        formData.append('contact', contact);

        try {
            const response = await fetch('/api/event_m/book_sell', {
                method: 'POST',
                body: formData,  
                
                enctype: "multipart/form-data"
            });

            const json = await response.json();

            if (!response.ok) {
                setErrors(json.errors);
                setErrors({ ...errors, form: 'Invalid input. Please try again.' });
            } else {
                console.log(json.image);
                setBook('');
                setAuthor('');
                setPrice('');
                setGenre('');
                setDescription('');
                setImage(null);
                setContact('');
                navigate('/old_books');
                setImage1(json.image)
            }
        } catch (err) {
            console.error('Request failed:', err);
            setErrors({ ...errors, form: 'Failed to add book. Please try again later.' });
        }
    };

    return (
        <div className="form_container">
            <form className="create" onSubmit={handleSubmit}  >
               
                <h3>Add Book</h3>

                <label>Book</label>
                <input
                    type="text"
                    onChange={(e) => setBook(e.target.value)}
                    value={book}
                />

                <label>Author</label>
                <input
                    type="text"
                    onChange={(e) => setAuthor(e.target.value)}
                    value={author}
                />

                <label>Price</label>
                <input
                    type="text"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                />
                <label>Genre</label>
                <input
                    type="text"
                    onChange={(e) => setGenre(e.target.value)}
                    value={genre}
                />

                <label>Description</label>
                <input
                    type="text"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />

                <label>Image</label>
                <input
                    type="file"
                    name="uimage"
                    onChange={(e)=> setImage(e.target.files[0])}
                    
                />

                <label>Contact no.</label>
                <input
                    type="text"
                    onChange={(e) => setContact(e.target.value)}
                    value={contact}
                />

                <button>Add</button>

                {errors.form && <div className="error">{errors.form}</div>}
            </form>
        </div>
    );
};

export default BsellForm;
