const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://fsd_1:RHzLMz65Y9Yh1dAt@cluster0.pudfioi.mongodb.net/Library');
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;