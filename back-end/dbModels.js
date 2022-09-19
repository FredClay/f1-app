const mongoose = require('mongoose');

const { Schema } = mongoose;

const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

mongoose.connect(`${process.env.MONGOPREFIX}${process.env.USER}:${process.env.PW}${process.env.MONGOSUFFIX}`, { useNewUrlParser: true}, (err) => {
    if (err) return console.log(err);
    return console.log('Connection Successful!');
});

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
    },
    wdcs: {
        type: Number,
        min: 0,
    },
    wccs: {
        type: Number,
        min: 0,
    },
    yearFounded: {
        type: Number,
        min: 1950,
        max: new Date().getFullYear(),
    }
});

const Team = mongoose.model('teams', TeamSchema);

module.exports = { Team };