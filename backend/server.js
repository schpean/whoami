const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const articleRoutes = require('./routes/articleRoutes'); // Assuming your routes are in a folder named 'routes'

// Mounting the routes under '/api'

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware, configurations, and other routes should go here...
app.use(cors({origin: 'http://localhost:3000'}));
app.use(bodyParser.json());
app.use('/api', articleRoutes);


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mywebsite', {
  useNewUrlParser: false,
  useUnifiedTopology: false // Add this to replace useFindAndModify
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB database');
  // Additional logic after successful connection if needed
});


// Basic route handling
app.get('/', (req, res) => {
  res.send('Hello, this is your Express server!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
