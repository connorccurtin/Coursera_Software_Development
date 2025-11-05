/**
 * src/controllers/userController.js
 * Handles user registration and login requests.
 */

const userService = require('../services/userService');

/**
 * Registers a new user.
 */
exports.registerUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

/**
 * Logs in an existing user.
 */
exports.loginUser = async (req, res) => {
    try {
        const token = await userService.authenticateUser(req.body);
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};
