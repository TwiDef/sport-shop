const express = require('express');
const router = express.Router();
const path = require('path');

const { getBikes, getBike } = require('../controllers/bike');

// Get /api/bikes
router.get('/', getBikes)
// Get /api/bikes/:id
router.get('/:id', getBike)

module.exports = router;
