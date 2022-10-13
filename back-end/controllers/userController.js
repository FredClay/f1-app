const router = require('express').Router();

const User  = require('../models/userModel');

router.post('/addUser', (req, res, next) => {
    if (Object.keys(req.body).length !== 2) return next({status: 400, msg: "Insufficient user info provided."});

    User.create(req.body)
    .then((result) => res.status(201).json(result))
    .catch((err) => next(err));
});

router.get('/checkCredentials/:name/:pw', (req, res, next) => {
    const { name, pw } = req.params;
    
    User.findOne({ username: name, password: pw })
        .then((results) => res.status(200).json(results))
        .catch((err) => next(err));
});

module.exports = router;
