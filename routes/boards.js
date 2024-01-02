const express = require('express');
const router = express.Router();
const path = require('path');

// Get /api/boards
router.get('/', (req, res) => res.send('Get All boards'))
// Get /api/boards/:id
router.get('/:id', (req, res) => res.send('Get single board'))

module.exports = router;
