const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');

require('dotenv').config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/contacts', contactRoutes);

module.exports = app;
