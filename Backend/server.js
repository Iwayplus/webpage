const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const contactRoutes = require('./routes/contact');
const quoteRoutes = require('./routes/quote');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Atlas connection URI
const mongoURI = 'mongodb+srv://ujjawaljha47:5IWEw3ArGdcEcpX8@cluster8.hvrikom.mongodb.net/?retryWrites=true&w=majority&appName=Cluster8';

// Connect to MongoDB
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use(contactRoutes);
app.use(quoteRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
