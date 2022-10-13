const mongoose = require('mongoose');

const { Schema } = mongoose;

// Driver Model
const DriverSchema = new Schema({
    firstName: {
        type: String,
        min: 2,
        required: true,
    },
    lastName: {
        type: String,
        min: 2,
        required: true,
    },
    nationality: {
        type: String,
        min: 2,
        required: true,
    },
    yearBorn: {
        type: Number,
        required: true,
    },
    wdcs: {
        type: Number,
        min: 0,
        required: true,
        default: 0,
    },
    wccs: {
        type: Number,
        min: 0,
        required: true,
        default: 0
    },
    teamsDrivenFor: {
        type: Array,
        required: true,
    }
});

const Driver = mongoose.model('drivers', DriverSchema);

module.exports = Driver;
