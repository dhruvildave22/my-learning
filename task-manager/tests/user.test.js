const request = require('supertest')
const app = require('../src/app')

test('Should signup a new user', async () => {
  await request(app).post('/users').send({
    name: "Dhruvil Dave",
    email: "dhruvildave22@mailinator.com",
    password: "Abcd@1234"
  }).expect(201)
})  