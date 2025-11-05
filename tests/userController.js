/**
 * @file tests/userController.test.js
 * @description Test suite for User Controller endpoints using Supertest and Jest.
 */

const request = require('supertest');
const app = require('../config/server').app;

describe('User Controller', () => {
    it('should register a new user', async () => {
        const res = await request(app)
            .post('/api/v1/users/register')
            .send({ username: 'testuser', password: 'password123' });
        expect(res.statusCode).toEqual(201);
        expect(res.body.message).toBe('User registered successfully');
    });
});
