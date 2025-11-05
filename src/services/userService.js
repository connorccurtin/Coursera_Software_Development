const User = require('../models/userModel');

// Business logic for user operations
class UserService {
    // Fetch a user by their ID
    static async getUserById(userId) {
        return await User.findById(userId);
    }

    // Update user information
    static async updateUser(userId, updateData) {
        return await User.findByIdAndUpdate(userId, updateData, { new: true });
    }

    // Delete a user
    static async deleteUser(userId) {
        return await User.findByIdAndDelete(userId);
    }
}

module.exports = UserService;