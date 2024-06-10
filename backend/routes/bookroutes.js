const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();
const Book = require('../models/Book');
const multer = require('multer');

// Ensure the uploads directory exists
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Set up multer storage for other routes that require file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

// Serve static files from the 'uploads' directory
router.use('/uploads', express.static(uploadDir));

// Endpoint to add a book for selling
router.post('/book_sell', upload.single('uimage'), (req, res) => {
    const { book, author, price, description, contact } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : undefined;

    if (!image) {
        return res.status(400).json({ message: 'Image upload failed or missing' });
    }

    const newBook = new Book({ book, author, price, description, image, contact });

    newBook.save()
        .then(result => {
            console.log('Book added to the database successfully');
            res.status(201).json({ message: 'Book added successfully', book: result, image: result.image });
        })
        .catch(err => {
            console.error('Error adding book to the database:', err);
            res.status(500).json({ message: 'Failed to add book', error: err });
        });
});

// Endpoint to fetch all books
router.get('/book_sell', async (req, res) => {
    try {
        const books = await Book.find({}).sort({ createdAt: -1 });
        res.status(200).json(books);
    } catch (err) {
        console.error('Error fetching books:', err);
        res.status(500).json({ message: 'Failed to fetch books', error: err });
    }
});


router.get('/:id', (req, res) => {
    const id = req.params.id;
    Book.findById(id)
        .then(result => {
            if (!result) {
                return res.status(404).json({ message: 'Book not found' });
            }
            console.log('Book fetched successfully');
            res.status(200).json({
                book: result.book,
                image: result.image,
                author: result.author,
                price: result.price,
                description: result.description,
                contact: result.contact
            });
        })
        .catch(err => {
            console.error('Error fetching book:', err);
            res.status(500).json({ message: 'Failed to fetch book', error: err });
        });
});


router.post('/cart', (req, res) => {
    const { book, author, price, description, contact, image } = req.body;

    if (!image) {
        return res.status(400).json({ message: 'Image URL is missing' });
    }

    const newBook = new Book({ book, author, price, description, image, contact });

    newBook.save()
        .then(result => {
            console.log('Book added to the Cart successfully');
            res.status(201).json({ message: 'Book added successfully', book: result, image: result.image });
        })
        .catch(err => {
            console.error('Error adding book to the Cart:', err);
            res.status(500).json({ message: 'Failed to add book', error: err });
        });
});

router.get('/cart', async (req, res) => {
    try {
        const books = await Book.find({}).sort({ createdAt: -1 });
        res.status(200).json(books);
    } catch (err) {
        console.error('Error fetching books:', err);
        res.status(500).json({ message: 'Failed to fetch books', error: err });
    }
});

module.exports = router;
