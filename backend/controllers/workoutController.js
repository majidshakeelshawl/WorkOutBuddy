const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

// Get workouts
const getWorkouts = async (req, res) => {
    const user_id = req.user._id;
    try {
        const workouts = await Workout.find({ user_id }).sort({ createdAt: -1 });
        res.status(200).json(workouts);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
}

// Get single workout
const getWorkout = async (req, res) => {
    // check for valid id
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ error: 'no such workout found' });
    }
    else {
        try {
            const workout = await Workout.findById(id);
            res.status(200).json(workout);
        }
        catch (err) {
            res.status(404).json({ error: err.message });
        }
    }
}

// Create a workout
const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body;

    let emptyFields = [];
    if (!title)
        emptyFields.push('title');
    if (!load)
        emptyFields.push('load');
    if (!reps)
        emptyFields.push('reps');
    if (emptyFields.length > 0) {
        res.status(400).json({ error: 'Enter all the required fields', emptyFields });
        return // it was executing the code below hence I used return
    }

    try {
        const user_id = req.user._id;
        const workout = await Workout.create({ title, load, reps, user_id });
        res.status(200).json(workout);
    }
    catch (err) {
        res.status(404).json({ error: err.message });
    }
}

// Delete workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params;
    // check for valid id
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ error: 'no such workout found' });
    }
    try {
        const workout = await Workout.findByIdAndDelete(id);
        // check if there was a workout to be updated if not it will be null
        if (!workout)
            res.status(404).json({ error: "No such workout" });
        res.status(200).json(workout);
    }
    catch (err) {
        res.status(404).json({ error: err.message });
    }
}

// Update workout
const updateWorkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ error: 'no such workout found' });
    }
    try {
        const workout = await Workout.findByIdAndUpdate(id, {
            ...req.body
        });
        // check if there was a workout to be updated if not it will be null
        if (!workout)
            res.status(404).json({ error: "No such workout" });
        res.status(200).json({ message: "Update successfully" });
    }
    catch (err) {
        res.status(404).json({ error: err.message });
    }
}


module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}