const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

//routers
const workoutRoutes = require('./routes/workouts');
//express
const app = express();

//middleware
app.use(express.json()); //used for parsing req.body data (alternative for body-parser)
app.use(morgan('dev'));

//routers
app.use('/api/workouts', workoutRoutes);

//connection to mongodb
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => console.log("Connected to db and Server started"));
    })
    .catch(err => console.log(err));