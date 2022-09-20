const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const workoutController = require('../controllers/workoutController');

//routes
router.get('/', workoutController.getWorkouts);

router.get('/:id', workoutController.getWorkout);

router.post('/', workoutController.createWorkout);

router.delete('/:id', workoutController.deleteWorkout);

router.patch('/:id', workoutController.updateWorkout);

module.exports = router;