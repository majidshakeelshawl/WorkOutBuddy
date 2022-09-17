const express = require('express');
const morgan = require('morgan');
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



app.listen(process.env.PORT, () => console.log("Server started"));