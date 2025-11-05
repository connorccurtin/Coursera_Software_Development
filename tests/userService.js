/**
 * @file tests/userService.test.js
 * @description Test suite for User Service business logic using Jest.
 */

const userService = require('../services/userService');
const User = require('../models/User');

jest.mock('../models/User');

describe('User Service', () => {
    it('should create a new user', async () => {
        User.mockImplementation(() => ({ save: jest.fn().mockResolvedValue(true) }));
        const user = await userService.createUser({ username: 'testuser', password: 'password123' });
        expect(user).toBeTruthy();
    });
});
