/**
 * src/routes/userRoutes.js
 * Defines API routes for user registration and login.
 */

const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const { isAuthenticated } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
