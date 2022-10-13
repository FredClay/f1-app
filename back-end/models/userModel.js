const mongoose = require('mongoose');

const { Schema } = mongoose;

//User model.

const UserSchema = new Schema({
    username: {
        type: String,
        min: 4,
        required: true,
    },
    password: {
        type: String,
        min: 4,
        required: true,
    }
});

const User = mongoose.model('users', UserSchema);

module.exports = User;

