/**
 * @file utils/responseFormatter.js
 * @description Helper function to standardize API responses.
 */

/**
 * Format API response
 * @param {object} data - Response data
 * @param {string} message - Response message
 * @returns {object} Formatted response object
 */
exports.formatResponse = (data, message = 'Success') => {
    return { message, data };
};
