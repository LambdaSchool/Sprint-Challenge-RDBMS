const express = require('express');

const resourceModel = require('./resource-model');

const router = express.Router();

router.get('/', (req, res) => {
    resourceModel
        .find()
        .then(resource => {
            res.status(200).json(resource);
        })
        .catch(error => {
            res.status(500).json({ message: 'failed to get resource' })
        })
});

router.post('/', (req, res) => {
    const description = req.body
    const notes = req.body
    const resource_id = req.body
    res.status(201).json(description, notes, resource_id);
})
error => {
    res.status(500).json({ message: 'failed to post resources' })
};

module.exports = router;