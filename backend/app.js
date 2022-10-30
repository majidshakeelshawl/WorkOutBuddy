const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

//routers
const workoutRoutes = require('./routes/workouts');
const userRoutes = require('./routes/user');
//express
const app = express();

//middleware
app.use(express.json()); //used for parsing req.body data (alternative for body-parser)
app.use(morgan('dev'));

//routers
app.use('/api/workouts', workoutRoutes);
app.use('/api/user', userRoutes);

//connection to mongodb
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT
            , () => console.log("Connected to db and Server started")  //COMMENT OUT THIS LINE TO PASS TESTS (JEST)
        );
    })
    .catch(err => console.log(err));

async function mongooseDisconnect() {
    await mongoose.disconnect();
}

module.exports = {
    app,
    mongooseDisconnect,
};