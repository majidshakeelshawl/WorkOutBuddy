const express = require('express');
const router = express.Router();
const workoutController = require('../controllers/workoutController');
const requireAuth = require('../middleware/requireAuth');

// authentication check - middleware
router.use(requireAuth);
//routes
router.get('/', workoutController.getWorkouts);

router.get('/:id', workoutController.getWorkout);

router.post('/', workoutController.createWorkout);

router.delete('/:id', workoutController.deleteWorkout);

router.patch('/:id', workoutController.updateWorkout);

module.exports = router;