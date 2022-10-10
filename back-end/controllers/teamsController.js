const router = require('express').Router();

const { Team } = require('../dbModels');

router.post('/addNewTeam', (req, res, next) => {
    if (!req.body || Object.keys(req.body).length < 2 || 
        req.body.name === '' || req.body.nation === '') return next({status: 400, msg: "Incomplete/No body provided."});

    Team.create(req.body)
        .then((result) => res.status(201).json(result))
        .catch((err) => next(err));
});

router.get('/getAllTeams', (req, res, next) => {
    Team.find({})
        .then((results) => res.status(200).json(results))
        .catch((err) => next(err));
});

router.get('/getSpecificTeam/:name', (req, res, next) => {
    const { name } = req.params;
    
    Team.find({ name: name })
        .then((results) => res.status(200).json(results))
        .catch((err) => next(err));
});

module.exports = router;
