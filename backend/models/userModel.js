const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        }
    }
);

userSchema.statics.signup = async function (email, password) {
    //Check for valid email and strong password
    if (!email || !password)
        throw Error("Both email and password field must be filled");
    if (!validator.isEmail(email))
        throw Error("Enter a valid email");
    if (!validator.isStrongPassword(password))
        throw Error("Password is not Strong");
    const emailsExists = await this.findOne({ email });
    if (emailsExists)
        throw Error("Email already in use");

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    // new user document
    return await this.create({ email, password: hash });

}

module.exports = mongoose.model('User', userSchema);