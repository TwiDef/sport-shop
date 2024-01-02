const Bike = require('../models/bike');

const getBikes = async (req, res) => {
    try {
        const bikes = await Bike.find();
        res.status(200).json(bikes);
    } catch (error) {
        res.status(500).json({ message: "Can't get bikes list" });
    }
}

module.exports = {
    getBikes
}