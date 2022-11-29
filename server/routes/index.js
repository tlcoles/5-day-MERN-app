const express = require('express');
const router = express.Router();

const questionRoutes = require('./QuestionRoutes');
const answerRoutes = require('./AnswerRoutes');

// Test route
router.get('/', (req, res) => {
    res.send('Welcome 5-Dayers!');
});

router.use('/questions', questionRoutes);
router.use('answers', answerRoutes);

module.exports = router;