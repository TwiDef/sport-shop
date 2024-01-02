const express = require('express');
const router = express.Router();
const path = require('path');

const { getBikes } = require('../controllers/bike');

// Get /api/bikes
router.get('/', getBikes)
// Get /api/bikes/:id
router.get('/:id', (req, res) => res.send('Get single bike'))

module.exports = router;
