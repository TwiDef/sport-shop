const passModule = require('./db_pass')
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors') // <--- important
require('dotenv').config();
const port = process.env.PORT || 5000;
const db_pass = passModule.db_pass

app.use(cors()) // <--- important

app.use(express.json()); // for parsing application/json
/* app.use(express.urlencoded({ extended: true })); */

app.use('/api/bikes', require('./routes/bikes'));
app.use('/api/boards', require('./routes/boards'));


/* mongoose.set('strictQuery', true) */
/* mongoose.connect("mongodb://localhost:27017")
    .then(() => {
        app.listen(port, () => {
            console.log(`App working on port: ${port}`);
        });
    }); */
mongoose.connect(`mongodb+srv://deferenseo:${db_pass}@cluster0.n4v6t7m.mongodb.net/sport-shop?retryWrites=true&w=majority&appName=Cluster0`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(port, () => {
            console.log(`App working on port: ${port}`);
        });
    });

