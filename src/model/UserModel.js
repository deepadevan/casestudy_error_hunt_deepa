const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://fsd_1:RHzLMz65Y9Yh1dAt@cluster0.pudfioi.mongodb.net/Library');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    id : String,  
    uid: String,
    pwd: String,
});

const userdata = mongoose.model('userdata',UserSchema);

module.exports = userdata;