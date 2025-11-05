/**
 * @file controllers/authController.js
 * @description Handles authentication and authorization logic.
 */

const userService = require('../services/userService');

/**
 * Middleware to protect routes and verify JWT
 */
exports.protect = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]; // Extract token
        const user = await userService.verifyToken(token);
        req.user = user; // Attach user info to request
        next();
    } catch (error) {
        res.status(401).json({ message: 'Unauthorized' });
    }
};
