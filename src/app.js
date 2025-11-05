/**
 * src/app.js
 * Main application setup.
 */

const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const { errorHandler } = require('./utils/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/users', userRoutes);

app.use(errorHandler);

module.exports = app;
