'use strict'

const errors = require('restify-errors')

var models = require('../models');

module.exports = {
    readAll: function (req, res, next) {

        models.person.findAll({ limit: 20 }).then(function (persons) {
            res.send(persons)
            next()
        }).catch(error => res.status(400).send(error));

    },

    readOne: function (req, res, next) {

        models.person.find({
            where: {
                'id': req.params.id
            }
        }).then(function (person) {

            res.send(person);
            next();
        }).catch(error => res.send(400));

    },

    createPerson: function (req, res, next) {
        console.log(req.params);
        console.log(req.body);
        models.person.create({
            id: 0,
            first_name: req.params['first_name'],
            last_name: req.params['last_name'],
            email: req.params['email'],
            phone_number: req.params['phone_number'],
            personal_number: req.params['personal_number']
        }).then(function (person) {
            res.send(person);
            next();
        }).catch(error => res.send(500));
    },

    updatePerson: function (req, res, next) {

        models.Contact.find({
            where: {
                'id': req.params['id']
            }
        }).then(function (person) {
            if (person) {
                person.updateAttributes({
                    first_name: req.params['first_name'],
                    last_name: req.params['last_name'],
                    email: req.params['email'],
                    phone_number: req.params['phone_number'],
                    personal_number: req.params['personal_number']
                }).then(function (person) {
                    res.send(person);
                    next();
                }).catch(error => res.send(500));
            }
        }).catch(error => res.send(400));
    },


    delPerson: function (req, res, next) {
        models.person.destroy({
            where: {
                id: req.params['id']
            }
        }).then(function (person) {
            res.send(person);
            next();
        }).catch(error => res.send(400));
    }
}

