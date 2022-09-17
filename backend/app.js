const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

//express
const app = express();

//middleware
app.use(morgan('dev'));

//routes
app.get('/', (req, res) => {
    res.send("<h1>Hello, Majid</h1>");
});



app.listen(process.env.PORT, () => console.log("Server started"));