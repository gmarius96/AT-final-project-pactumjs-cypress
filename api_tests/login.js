const { spec,request } = require('pactum');
const { faker } = require('@faker-js/faker');
const baseUrl="https://practice.expandtesting.com/notes/api";
const userEmail = "Elliot.Kozey19@yahoo.com";
const userPassword="Password11!!";
describe('Login tests', () => {
    before(async () => {
    request.setDefaultTimeout(10000);
});

it('Login with good credentials', async () => {
    const loginResponse=await spec()
    .post(`${baseUrl}/users/login`)
    .withBody(
        {
            "email": userEmail,
            "password": userPassword
        }
    )
    .expectStatus(200)
    const tokenId=loginResponse.body.data.token;
    console.log(tokenId);

})

})
