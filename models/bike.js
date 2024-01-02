const mongoose = require('mongoose');

const bikeSchema = mongoose.Schema({
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
    color: {
        type: String
    },
    weight: {
        type: Number
    },
    bikeImage: {
        type: String
    }
});

module.exports = mongoose.model('Bike', bikeSchema)
