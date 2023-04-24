//require mongoose
const mongoose = require('mongoose');
//set up the schema for the user model 
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: { type: String },
    password: { type: String },
    //posts: [postSchema]
});

module.exports =  mongoose.model('User', userSchema);