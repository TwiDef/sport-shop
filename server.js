const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')
require('dotenv').config();
const port = process.env.PORT || 5000;

app.use(cors())

app.use(express.json()); // for parsing application/json
/* app.use(express.urlencoded({ extended: true })); */

app.use('/api/bikes', require('./routes/bikes'));
app.use('/api/boards', require('./routes/boards'));


/* mongoose.set('strictQuery', true) */
mongoose.connect("mongodb://localhost:27017")
    .then(() => {
        app.listen(port, () => {
            console.log(`App working on port: ${port}`);
        });
    });