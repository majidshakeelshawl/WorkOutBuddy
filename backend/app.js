const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require("path");
require('dotenv').config();

//routers
const workoutRoutes = require('./routes/workouts');
const userRoutes = require('./routes/user');
//express
const app = express();

//middleware
app.use(express.json()); //used for parsing req.body data (alternative for body-parser)
//for serving public files
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));

//routers
app.use('/api/workouts', workoutRoutes);
app.use('/api/user', userRoutes);
app.get("/*", (req, res) => {
    return res.sendFile(path.join(__dirname, "public", "index.html"));
});

//connection to mongodb
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT
            //Comment out console.log if any error occurs for JEST
            // , () => console.log(`Connected to db and Server started and server listening at PORT ${process.env.PORT}`)
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