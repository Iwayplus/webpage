const mongoose = require('mongoose');

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

module.exports = mongoose.model('Quote', quoteSchema);
