// models/Quote.js
const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  organization: { type: String, required: true },
  coreFunctionality: { type: String, required: true },
  timeline: { type: String, required: true },
  service: { type: String, required: true },
  area: { type: String, required: true },
  source: { type: String, required: true },
  otherAnswers: {
    coreFunctionality: { type: String, default: '' },
    timeline: { type: String, default: '' },
    source: { type: String, default: '' },
  },
  additionalDetails: { type: String, default: '' },
});

module.exports = mongoose.model('Quote', QuoteSchema);
