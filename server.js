const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json()); // for parsing application/json

app.use('/api/bikes', require('./routes/bikes'));
app.use('/api/boards', require('./routes/boards'));

mongoose.connect('mongodb://localhost:27017')
    .then(() => {
        app.listen(port, () => {
            console.log(`App working on port: ${port}`);
        });
    });