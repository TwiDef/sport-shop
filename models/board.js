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
        type: String
    },
    length: {
        type: Number
    },
    pressue: {
        type: Number
    },
    boardImage: {
        type: String
    }
});

module.exports = mongoose.model('Board', boardSchema)