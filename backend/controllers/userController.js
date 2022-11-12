const mongoose = require('mongoose');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' });
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.signin(email, password);
        //id of user
        const user_id = user._id;
        //token
        const token = createToken(user_id);
        res.status(200).json({ email, token, user_id });
    }
    catch (error) {
        res.status(400).json({ err: error.message });
    }
}

const signupUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.signup(email, password);
        //token
        const token = createToken(user._id);
        res.status(200).json({ email, token });
    }
    catch (error) {
        res.status(400).json({ err: error.message });
    }
}

module.exports = { loginUser, signupUser }