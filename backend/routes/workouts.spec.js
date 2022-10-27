const request = require('supertest');
const app = require('../app');

let user;
let token;

describe(('Test GET /workouts'), () => {
    test('Should respond with 200 status code when user logs in', async () => {
        //login a user
        user = await request(app).post('/api/user/login').send(
            {
                email: process.env.TEST_EMAIL,
                password: process.env.TEST_PASSWORD
            }
        ).expect(200);
        token = user.body.token;

    });
    test('Should respond with 200 status code while getting all the workouts', async () => {
        await request(app).get('/api/workouts')
            .set({ 'Authorization': `Bearer ${token}` })
            .expect(200);
    });
});