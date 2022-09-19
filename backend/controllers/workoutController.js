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
        res.status(400).json({ error: err.message });
    }
}
// Delete workout

// Update workout

module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout
}