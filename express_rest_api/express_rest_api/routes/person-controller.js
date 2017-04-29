'use strict'
var models = require('../models');

module.exports = {
    readAll: function (req, res, next) {

        models.person.findAll({ limit: 20 }).then(function (persons) {
            res.send(persons)
            next()
        }).catch(error => res.sendStatus(400));

    },
    readOne: function (req, res, next) {

        models.person.find({
            where: {
                'id': req.params.id
            }
        }).then(function (person) {
            if (person) {
                res.send(person);
                next();
            } else {
                res.sendStatus(400);
                next();
            }

        }).catch(error => res.sendStatus(500));

    },
    createPerson: function (req, res, next) {
        models.person.create({
            id: 0,
            first_name: req.body['first_name'],
            last_name: req.body['last_name'],
            email: req.body['email'],
            phone_number: req.body['phone_number'],
            personal_number: req.body['personal_number']
        }).then(function (person) {
            res.send(person);
            next();
        }).catch(error => res.sendStatus(500));
    },
    updatePerson: function (req, res, next) {

        models.person.find({
            where: {
                'id': req.body['id']
            }
        }).then(function (person) {
            if (person) {
                person.updateAttributes({
                    first_name: req.body['first_name'],
                    last_name: req.body['last_name'],
                    email: req.body['email'],
                    phone_number: req.body['phone_number'],
                    personal_number: req.body['personal_number']
                }).then(function (person) {
                    res.send(person);
                    next();
                }).catch(error => res.sendStatus(500));
            } else {
                res.sendStatus(400);
                next();
            }
        }).catch(error => res.sendStatus(500));
    },
    delPerson: function (req, res, next) {
        models.person.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (person) {
            console.log(person);
            if (person == 1) {
                res.sendStatus(200);
                next();
            } else {
                res.sendStatus(400);
                next();
            }
        }).catch(error => res.sendStatus(500));
    }
}

