const express =require('express')
 
const  router = express.Router(); 

const Book = require('../models/Book');





router.post('/book_sell',(req,res)=>{
const book = new Book(req.body);
book.save()
        .then(result => {
            console.log("Book added to the database successfully");
            res.status(201).json({ message: 'Book added successfully', book: result });
        })
        .catch(err => {
            console.error("Error adding book to the database:", err);
            res.status(500).json({ message: 'Failed to add book', error: err });
        });
    });



module.exports =router;


