const express = require('express');
const router = express.Router();
const path = require('path');

const { getBoards, getBoard } = require('../controllers/board');

// Get /api/boards
router.get('/', getBoards)
// Get /api/boards/:id
router.get('/:id', getBoard)

module.exports = router;
