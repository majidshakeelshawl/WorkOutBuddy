const mongoose = require('mongoose');
const User = require('../models/userModel');

const loginUser = async (req, res) => {
    res.json({ msg: "User login" });
}

const signupUser = async (req, res) => {
    res.json({ msg: "User signup" });
}

module.exports = { loginUser, signupUser }