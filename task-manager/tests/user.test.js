const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')

const userOne = {
  name: 'Mike',
  email: 'mike@mailinator.com',
  password: '56what!!'
}

beforeEach(async () => {
  await User.deleteMany()
  await new User(userOne).save()
})

test('Should signup a new user', async () => {
  await request(app).post('/users').send({
    name: "Dhruvil Dave",
    email: "dhruvildave22@mailinator.com",
    password: "Abcd@1234"
  }).expect(201)
})  

test('Should login to existing user', async () => {
  await request(app).post('/users/login').send({
    email: userOne.email,
    password: userOne.password
  }).expect(200)
})

test('Should not login to nonexisting user', async ( )=> {
  await request(app).post('/users/login').send({
    email: userOne.email,
    password: 'wrongpassword'
  }).expect(400)
})