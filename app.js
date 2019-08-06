const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

//Middlewares

app.use(express.json());
app.use(cors());
// Import Routes
const postRoute = require('./routes/posts');

app.use('/posts', postRoute);

//ROUTES
app.get('/', (req,res) => {
    res.send("We're home")
});

mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true },
() => console.log('connected to db'));

// Listen for this port
app.listen(3000)
