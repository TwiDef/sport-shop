const Bike = require('../models/bike');
/** 
 * Get all items
 * @param {*} req 
 * @param {*} res 
 */

const getBikes = async (req, res) => {
    try {
        const bikes = await Bike.find();
        res.status(200).json(bikes);
    } catch (error) {
        res.status(500).json({ message: "Can't get bikes list" });
    }
}

const getBike = async (req, res) => {
    try {
        const bike = await Bike.find({ _id: req.params.id });
        res.status(200).json(bike);
    } catch (error) {
        res.status(400).json({ message: "Can't get bike" });
    };
};

module.exports = {
    getBikes,
    getBike
}