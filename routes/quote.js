const express = require('express');
const router = express.Router();
const Quote = require('../models/quote');

router.post('/quote', async (req, res) => {
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

module.exports = router;
