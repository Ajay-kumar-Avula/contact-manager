const Contact = require('../models/Contact');
const { validationResult } = require('express-validator');

//  GET All Contacts
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

//  GET Single Contact by ID
exports.getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ error: 'Contact not found' });
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

//  CREATE Contact
exports.createContact = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

//  UPDATE Contact
exports.updateContact = async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedContact) return res.status(404).json({ error: 'Contact not found' });
    res.status(200).json(updatedContact);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

//  DELETE Contact
exports.deleteContact = async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact) return res.status(404).json({ error: 'Contact not found' });
    res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

//  SEARCH Contacts
exports.searchContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({ name: { $regex: req.query.q, $options: 'i' } });
    res.status(200).json(contacts);
  } catch (error) { 
    res.status(500).json({ error: 'Server error' });
  } 
};