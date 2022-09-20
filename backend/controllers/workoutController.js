const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

// Get workouts
const getWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find({}).sort({ createdAt: -1 });
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
    try {
        const workout = await Workout.create({ title, load, reps });
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
        res.status(200).json({ message: "Workout deleted" });
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