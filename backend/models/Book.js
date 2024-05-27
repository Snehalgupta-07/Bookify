const mongoose=require('mongoose');

const bookSchema=new mongoose.Schema({
    book: {
        type:String,
        required: [true, 'Please enter name of the book']
    },
    author: {
        type: String,
        required: [true, "Please enter a author's name"]
    },

    price: {
        type: String,
        required: [true, 'Please enter price of the book'],
    },
     description: {
        type: String,
        required: [true, 'Please enter the description'],
     }
});
const Book=mongoose.model('book',bookSchema);
module.exports = Book;

