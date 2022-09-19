const express = require('express');

const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const teamRoutes = require('./controllers/teamsController');
app.use('/teams', teamRoutes);

app.get('/greeting', (req, res) => {
    res.send("Welcome to Fred's Formula 1 Driver API!")
});

app.use('*', (req, res, next) => {
    next({status: 404, msg: "Not a valid URL!"})
});

app.use((err, req, res, next) => {
    console.log("Error Found!");
    console.log(err.msg);
    return res.status(err.status).send(err.msg);
});

const server = app.listen(5000, () => {
    console.log(`Started server on port No. ${server.address().port}`);
});

module.exports = server;
