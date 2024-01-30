const mongoose = require('mongoose');

const boardSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    length: {
        type: Number,
        required: true
    },
    pressue: {
        type: Number,
        required: true
    },
    boardImage: {
        type: String,
        required: true
    },
    rating: {
        type: Number
    }
});

module.exports = mongoose.model('Board', boardSchema)