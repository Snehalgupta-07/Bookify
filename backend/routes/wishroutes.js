
const express = require('express');
const { Router } = require('express');
const router3 = Router();
const Wish = require('../models/Wishlist');



router3.post('/wish', (req, res) => {
    const { book, author, price, genre,description, contact, image } = req.body;

    if (!image) {
        return res.status(400).json({ message: 'Image URL is missing' });
    }

    const newWish = new Wish({ book, author, price,genre, description, image, contact });

    newWish.save()
        .then(result => {
            console.log('Book added to the Wishlist successfully');
            res.status(201).json({ message: 'Book added successfully', book: result, image: result.image });
        })
        .catch(err => {
            console.error('Error adding book to the Wishlist:', err);
            res.status(500).json({ message: 'Failed to add book', error: err });
        });
});

router3.get('/wish', async (req, res) => {
    try {
        const wish_s = await Wish.find({}).sort({ createdAt: -1 });
        res.status(200).json(wish_s);
    } catch (err) {
        console.error('Error fetching books:', err);
        res.status(500).json({ message: 'Failed to fetch books', error: err });
    }
});

router3.get('/:id', (req, res) => {
    const id = req.params.id;
    Cart.findById(id)
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
                genre: result.genre,
                description: result.description,
                contact: result.contact
            });
        })
        .catch(err => {
            console.error('Error fetching book:', err);
            res.status(500).json({ message: 'Failed to fetch book', error: err });
        });
});

router3.delete('/:id',(req,res)=>{
    const id = req.params.id;
    Cart.findByIdAndDelete(id)
    .then(res =>{
        res.json("Cart item deleted");
    })
    .catch((err)=>{
        console.log(err)
    })
    })


module.exports = router3;