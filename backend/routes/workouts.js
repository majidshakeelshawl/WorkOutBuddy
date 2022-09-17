const express = require('express');
const router = express.Router();

//routes
router.get('/', (req, res) => {
    res.json({ "msg": "all workouts" });
});

router.get('/:id', (req, res) => {
    res.json({ "msg": "single workout" });
});

router.post('/', (req, res) => {
    res.json({ "msg": "add workout" });
});

router.delete('/:id', (req, res) => {
    res.json({ "msg": "delete workout" });
});

router.patch('/:id', (req, res) => {
    res.json({ "msg": "edit a workout" });
});

module.exports = router;