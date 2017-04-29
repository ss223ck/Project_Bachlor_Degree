'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var config = require('./config.js'),
    personController = require('./routes/person-controller')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = config.port;

var router = express.Router();

router.get("/values", personController.readAll);
router.get("/values/:id", personController.readOne);
router.post("/values", personController.createPerson);
router.put("/values", personController.updatePerson);
router.delete("/values/:id", personController.delPerson);

app.use('/api', router);

app.listen(port);
console.log('Started REST api on ' + port);