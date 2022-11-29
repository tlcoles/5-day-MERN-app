const express = require('express');
const router = express.Router();

// Import our question model
const questionDB = require('../models/QuestionModel');

// Add a question
// POST /api/questions - ADD QUESTION
router.post('/', async (req, res) => {
    try {
        // save question to DB
        await questionDB
            .create({
                description: req.body.description,
                imageUrl: req.body.imageUrl,
                user: req.body.user,
            })
            .then(() => {
                res.status(201).send({
                    status: true,
                    message: 'Question added successfully',
                });
            })
            .catch((err) => {
                res.status(400).send({
                    status: 'false', //! Boobytrap?
                    message: 'Question could not be added',
                })
            })
    } catch (error) {
        res.status(500).send({
            status: false,
            message: 'Server error while adding question',
        }); 
    }
});