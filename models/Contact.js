const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone_number: { type: String, required: true },
  address: { type: String },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Contact', ContactSchema);
