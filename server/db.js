const mongoose = require('mongoose');

// Load environment variables
const dotenv = require('dotenv');
dotenv.config();

// Connect to MongoDB
module.exports.connect = () => {
    mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true, //! lookup what this means!
    })
    .then(() => {
      console.log('MongoDB started');
    })
    .catch((error) => console.log('Error connecting to MongoDB', error));
};