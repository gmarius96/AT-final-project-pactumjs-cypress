
const { spec,request } = require('pactum');
baseUrl="https://practice.expandtesting.com/notes/api";
const userEmail = "Elliot.Kozey19@yahoo.com";
const userPassword="Password11!!";
const availableNotes = require("../data/notesSchema.json");
describe('Obtaining token', () => {
    let tokenId=""
        beforeEach(async () => {
        request.setDefaultTimeout(10000);
        const loginResponse=await spec()
        .post(`${baseUrl}/users/login`)
        .withBody({
            "email": userEmail,
            "password": userPassword
            }) 
        .expectStatus(200);
        tokenId=loginResponse.body.data.token;
    });
it('Getting all notes status verification', async () => {
    await spec()
    .get(`${baseUrl}/notes`)
    .withHeaders({"x-auth-token":tokenId})
    .expectStatus(200)
    .expectJsonSchema(availableNotes)
})
})
