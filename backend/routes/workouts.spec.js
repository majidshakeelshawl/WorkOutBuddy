const request = require('supertest');
const { app, mongooseDisconnect } = require('../app');

// parameters for logged_in user (not for signed-up)(not testing sign-up yet)
let user;
let user_id;
let token;

async function currentUser() {
    const response = await request(app)
        //here we need to hit end points because(not full url i.e from localhost://api/) supertest runs our app internally
        .post('/api/user/signup')
        .send({
            email: process.env.TEST_EMAIL,
            password: process.env.TEST_PASSWORD
        });
    user = response.body;
    token = user.token;
    // have a look in the backend how the user id is returned after logging in
    user_id = user.user_id;
}
describe("Workouts API Tests Block Containing all", () => {
    beforeAll(async () => {
        // to set user,token and user_id global variables
        await currentUser();
    });

    afterAll(async () => {
        await mongooseDisconnect();
    });

    describe('Test GET /workouts', () => {
        // test('Should respond with 200 status code when user logs in', () => {
        //     expect(user);
        // });
        test('Should respond with 200 status code while getting all the workouts', async () => {
            const response = await request(app).get('/api/workouts')
                .set({ 'Authorization': `Bearer ${token}` })
                .expect(200);
        });
    });

    describe('Test POST /workout', () => {
        const workoutData = {
            user_id: user_id,
            title: 'Jumps',
            reps: 12,
            load: 14,
        }
        test('Should respond with 200 status after saving a workout', async () => {
            const response = await request(app)
                .post('/api/workouts/')
                .set({ 'Authorization': `Bearer ${token}` })
                .send(workoutData)
                .expect(200);
        });
    });
});
