/**
 * src/middlewares/errorHandler.js
 * Centralized error handling middleware.
 */

exports.errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode).json({ message: err.message });
};
