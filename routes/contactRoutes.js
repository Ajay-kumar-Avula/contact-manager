const express = require('express');
const { body } = require('express-validator');
const {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact
} = require('../controllers/contactController');

const router = express.Router();

router.get('/', getAllContacts);
router.get('/:id', getContactById);
router.post(
  '/',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('phone_number').notEmpty().withMessage('Phone number is required')
  ],
  createContact
);
router.put('/:id', updateContact);
router.delete('/:id', deleteContact);

module.exports = router;
