const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const workoutController = require('../controllers/workoutController');

//routes
router.get('/', workoutController.getWorkouts);

router.get('/:id', workoutController.getWorkout);

router.post('/', workoutController.createWorkout);

router.delete('/:id', (req, res) => {
    res.json({ "msg": "delete workout" });
});

router.patch('/:id', (req, res) => {
    res.json({ "msg": "edit a workout" });
});

module.exports = router;