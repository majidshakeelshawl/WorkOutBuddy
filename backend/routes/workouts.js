const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Workout = require('../models/workoutModel');

//routes
router.get('/', (req, res) => {
    res.json({ "msg": "all workouts" });
});

router.get('/:id', (req, res) => {
    res.json({ "msg": "single workout" });
});

router.post('/', async (req, res) => {
    const { title, load, reps } = req.body;
    try {
        const workout = await Workout.create({ title, load, reps });
        res.status(200).json(workout);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.delete('/:id', (req, res) => {
    res.json({ "msg": "delete workout" });
});

router.patch('/:id', (req, res) => {
    res.json({ "msg": "edit a workout" });
});

module.exports = router;