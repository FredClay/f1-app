const mongoose = require('mongoose');

const { Schema } = mongoose;

// Team Model
const TeamSchema = new Schema({
    name: {
        type: String,
        min: 2,
        required: true,
    },
    nation: {
        type: String,
        min: 2,
        required: true,
    },
    teamPrincipal: {
        type: String,
        default: 'None Provided',
        required: true,
    },
    wdcs: {
        type: Number,
        min: 0,
        required: true,
    },
    wccs: {
        type: Number,
        min: 0,
        required: true,
    },
    yearFounded: {
        type: Number,
        min: 1950,
        max: new Date().getFullYear(),
        required: true,
    }
});

const Team = mongoose.model('teams', TeamSchema);

module.exports = Team;
