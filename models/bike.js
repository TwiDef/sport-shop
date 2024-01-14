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
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    bikeImage: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('Bike', bikeSchema)
