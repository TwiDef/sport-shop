const Board = require('../models/board');

const getBoards = async (req, res) => {
    try {
        const boards = await Board.find();
        res.status(200).json(boards);
    } catch (error) {
        res.status(500).json({ message: "Can't get boards list" });
    }
}

const getBoard = async (req, res) => {
    try {
        const board = await Board.find({ _id: req.params.id });
        res.status(200).json(board);
    } catch (error) {
        res.status(400).json({ message: "Can't get board" });
    };
};

module.exports = {
    getBoards,
    getBoard
}