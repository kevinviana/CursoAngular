const express = require('express');
const Person = require('./person');
const mongoose = require("mongoose");
const routes = express.Router();

mongoose.connect('mongodb://localhost:27017/rxjsdb', { useNewUrlParser: true, useUnifiedTopology: true });

routes.get('/', (req, res) => {
    Person.find({}).lean().exec((err, data) => {
        if (err) {
            return res.status(500).json({
                error: err,
                message: 'Internal error.',
            });
        }
        return res.status(200).json(data);
    });
});

routes.get('/:text', (req, res) => {

    let text = req.params.text;

    const query = {
        $or: [
            { firstName: { $regex: text, $options: 'i' } },
            { lastName: { $regex: text, $options: 'i' } },
            { email: { $regex: text, $options: 'i' } },
            { city: { $regex: text, $options: 'i' } },
            { country: { $regex: text, $options: 'i' } },
        ]
    };

    Person.find(query).lean().exec((err, data) => {
        if (err) {
            return res.status(500).json({
                error: err,
                message: 'Internal error.',
            });
        }
        setTimeout(() => (res.status(200).json(data)), 2500);
});
});

routes.use((req, res, next) => {
    res.status(404).send('Page not found');
});

module.exports = routes