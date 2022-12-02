// Export dependencies
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();
const db = ('./db.js');
const router = require('./routes');

// Middlewares
app.use(bodyParser.json({ limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '50 mb' }));

// cors
app.use((req, res, next) => {
    req.header('Access-Control-Allow-Origin', '*');
    req.header('Access-Control-Allow-Headers', '*');
    next();
});

app.use(cors());

// Routes
app.use('/api', router);

// Connect to DB
db.connect();

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
