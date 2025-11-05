/**
 * src/config/server.js
 * Initializes the Express server with middleware.
 */

const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

module.exports = app;
