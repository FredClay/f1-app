const router = require('express').Router();

const Driver  = require('../models/driversModel');

router.post('/addNewDriver', (req, res, next) => {
    if (!req.body || Object.keys(req.body).length < 2 || 
        req.body.name === '' || req.body.nation === '') return next({status: 400, msg: "Incomplete/No body provided."});

    Driver.create(req.body)
        .then((result) => res.status(201).json(result))
        .catch((err) => next(err));
});

router.get('/getAllDrivers', (req, res, next) => {
    Driver.find({})
        .then((results) => res.status(200).json(results))
        .catch((err) => next(err));
});

router.get('/getSpecificDriver/:name', (req, res, next) => {
    const { name } = req.params;
    
    Driver.find({ firstName: name, lastName: name })
        .then((results) => res.status(200).json(results))
        .catch((err) => next(err));
});

module.exports = router;
