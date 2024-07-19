const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

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

// Define a schema for the contact form
const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    company: { type: String },
    message: { type: String, required: true },
});

// Create a model from the schema
const Contact = mongoose.model('Contact', contactSchema);

// Define a schema for the newsletter subscription
const subscriberSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    subscribedAt: { type: Date, default: Date.now }
});

// Create a model from the schema
const Subscriber = mongoose.model('Subscriber', subscriberSchema);

// Define a schema for the quote form
const quoteSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    organization: { type: String, required: true },
    coreFunctionality: { type: String, required: true },
    otherCoreFunctionality: { type: String },
    timeline: { type: String, required: true },
    otherTimeline: { type: String },
    service: { type: String, required: true },
    area: { type: String, required: true },
    source: { type: String, required: true },
    otherSource: { type: String },
    additionalDetails: { type: String },
});

// Create a model from the schema
const Quote = mongoose.model('Quote', quoteSchema);

// Define the POST route to save contact form data
app.post('/api/contact', async (req, res) => {
    const { name, phone, email, company, message } = req.body;
    try {
        const newContact = new Contact({ name, phone, email, company, message });
        await newContact.save();
        res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting form', error });
    }
});

// Define the POST route to save subscriber data
app.post('/api/subscribe', async (req, res) => {
    const { email } = req.body;
    try {
        const newSubscriber = new Subscriber({ email });
        await newSubscriber.save();
        res.status(200).json({ message: 'Subscription successful' });
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({ message: 'Email already subscribed' });
        } else {
            res.status(500).json({ message: 'Error subscribing', error });
        }
    }
});

// Define the POST route to save quote form data
app.post('/api/quote', async (req, res) => {
    const {
        name, phone, email, organization, coreFunctionality, otherCoreFunctionality,
        timeline, otherTimeline, service, area, source, otherSource, additionalDetails
    } = req.body;

    try {
        const newQuote = new Quote({
            name, phone, email, organization, coreFunctionality, otherCoreFunctionality,
            timeline, otherTimeline, service, area, source, otherSource, additionalDetails
        });
        await newQuote.save();
        res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting form', error });
    }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
