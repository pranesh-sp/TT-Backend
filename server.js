const express = require('express')
const app = express()
const port = 3200
var mongoose = require('./db')
var bodyParser = require('body-parser')
var User = require('./models/User')
var timetable = require('./models/timetable')
var assignment = require('./models/assignment')
var jwt = require('jsonwebtoken')
var config = require('./config');
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('TimeTable Manager'))

app.post('/register', (req, res) => {

    console.log(req);
    var obj = req.body;
    console.log(obj);
    User.create(obj).then((doc) => {
        console.log(doc);
        res.status(200).send({
            data: doc
        });
    }).catch((err) => {
        res.status(500).send({
            message: err.toString()
        });
    })

});

app.post('/login', function (req, res) {

    User.findOne({
        username: req.body.username
    }, async function (err, user) {
        if (err) return res.status(500).send({
            message: err.toString()
        });
        if (!user) return res.status(400).send({
            message: 'Invalid Credentials'
        });

        if (user.password === req.body.password)
            var passwordIsValid = true;
        if (!passwordIsValid) return res.status(400).send({
            auth: false,
            token: null,
            message: 'Invalid Credentials'
        });

        var token = jwt.sign({
            username: user.username
        }, config.secret, {
            expiresIn: 86400 // expires in 24 hours
        });

        res.status(200).send({
            auth: true,
            token: token
        });
    });

});

app.post('/addAssignment', (req, res) => {

    console.log(req);
    var obj = req.body;
    console.log(obj);
    assignment.create(obj).then((doc) => {
        console.log(doc);
        res.status(200).send({
            data: doc
        });
    }).catch((err) => {
        res.status(500).send({
            message: err.toString()
        });
    })

});

app.post('/addTimetable', (req, res) => {

    console.log(req);
    var obj = req.body;
    console.log(obj);
    timetable.create(obj).then((doc) => {
        console.log(doc);
        res.status(200).send({
            data: doc
        });
    }).catch((err) => {
        res.status(500).send({
            message: err.toString()
        });
    })

});
app.post('/viewTimetable', (req, res) => {

    console.log(req);
    var obj = req.body;
    console.log(obj);
    assignment.findOne({
        username: req.body.username,
        day: req.body.day
    }, async function (err, user) {
        if (err) return res.status(500).send({
            message: err.toString()
        });
        if (!user) return res.status(400).send({
            message: 'Invalid username'
        });

        if (user) {
            res.status(200).send({
                data: user
            });
        }
    });

});

app.post('/viewAssignment', (req, res) => {

    console.log(req);
    var obj = req.body;
    console.log(obj);
    assignment.findOne({
        username: req.body.username
    }, async function (err, user) {
        if (err) return res.status(500).send({
            message: err.toString()
        });
        if (!user) return res.status(400).send({
            message: 'Invalid username'
        });

        if (user) {
            res.status(200).send({
                data: user
            });
        }
    });

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))