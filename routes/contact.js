const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

router.post('/api/contact', async (req, res) => {
    const { name, phone, email, company, message } = req.body;
    try {
        const newContact = new Contact({ name, phone, email, company, message });
        await newContact.save();
        res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting form', error });
    }
});

module.exports = router;
