const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
    const emailsExists = await this.findOne({ email });
    if (emailsExists)
        throw Error("Email already in use");

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    // new user document
    return await this.create({ email, password: hash });

}

module.exports = mongoose.model('User', userSchema);