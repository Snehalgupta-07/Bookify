const { Double } = require('mongodb');
const mongoose=require('mongoose');


const cartSchema=new mongoose.Schema({
    book: {
        type:String,
        required: [true, 'Please enter name of the book']
    },
    author: {
        type: String,
        required: [true, "Please enter a author's name"]
    },

    price: {
        type: Number,
        required: [true, 'Please enter price of the book'],
    },
     description: {
        type: String,
        required: [true, 'Please enter the description'],
     },
     image: {
        type: String,
        required: [true,'Please upload image of the book'],
     },

     contact: {
        type: String,
        required: [true, 'Please enter your contact information'],
     }

});
const Cart=mongoose.model('cart',cartSchema);
module.exports = Cart;

