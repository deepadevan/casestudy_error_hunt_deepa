const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://fsd_1:RHzLMz65Y9Yh1dAt@cluster0.pudfioi.mongodb.net/Library');
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;