const Workout = require('../models/workoutModel');

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
    getWorkouts
}