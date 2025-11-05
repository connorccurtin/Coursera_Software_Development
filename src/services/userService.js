/**
 * src/services/userService.js
 * Service layer for user operations such as registration and authentication.
 */

const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/env');

/**
 * Creates a new user in the database.
 */
exports.createUser = async (userData) => {
    const user = new User(userData);
    return await user.save();
};

/**
 * Authenticates a user and returns a JWT.
 */
exports.authenticateUser = async ({ username, password }) => {
    const user = await User.findOne({ username });
    if (!user || !(await user.matchPassword(password))) {
        throw new Error('Invalid credentials');
    }
    return jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
};

/**
 * Verifies a JWT token.
 */
exports.verifyToken = async (token) => {
    return jwt.verify(token, JWT_SECRET);
};
