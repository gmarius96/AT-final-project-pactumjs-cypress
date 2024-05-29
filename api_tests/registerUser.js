const { spec,request } = require('pactum');
const { faker } = require('@faker-js/faker');
baseUrl="https://practice.expandtesting.com/notes/api";
const randomName = faker.person.fullName();
const randomEmail = faker.internet.email();
console.log(randomName);
console.log(randomEmail);
describe('Register new users', () => {
    before(async () => {
    request.setDefaultTimeout(10000);
});
it('Register user with valid credentials', async () => {
    await spec()
    .post(`${baseUrl}/users/register`)
    .withBody(
        {
            "name": randomName,
            "email": randomEmail,
            "password": "Password11!!"
        }
    )
    .expectStatus(201)
})
it('Register user with invalid credentials - NOK Password', async () => {
    await spec()
    .post(`${baseUrl}/users/register`)
    .withBody(
        {
            "name": randomName,
            "email": randomEmail,
            "password": "1"
        }
    )
    .expectStatus(400)
})
})