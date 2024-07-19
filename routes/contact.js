// routes/contact.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST route to handle form submissions
router.post('/', async (req, res) => {
  try {
    const { name, phone, email, company, message } = req.body;
    const contact = new Contact({ name, phone, email, company, message });
    await contact.save();
    res.status(201).json({ message: 'Form submitted successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
