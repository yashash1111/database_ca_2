const mongoose = require("mongoose");

const bookslist = new mongoose.Schema({
    user1:{
        type:String,
        required:true
    },
    user2:{
        type:String,
        required:true
    },
    user3:{
        type:String,
        required:true
    }
});

const userSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    names: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    publishedYear: {
        type:Number
    },
    availableCopies: {
        type: Number
    },
    borrowedBy:{
        type: [bookslist]
    }
});


const booksSchema = mongoose.model("booksSchema", userSchema);
module.exports = booksSchema;