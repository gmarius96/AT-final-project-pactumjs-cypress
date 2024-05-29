
const { spec,request } = require('pactum');
baseUrl="https://practice.expandtesting.com/notes/api";
const userEmail = "Elliot.Kozey19@yahoo.com";
const userPassword="Password11!!";
describe('Creating new note', () => {
    let tokenId=""
        before(async () => {
        request.setDefaultTimeout(10000);
        const loginResponse=await spec()
        .post(`${baseUrl}/users/login`)
        .withBody({
            "email": userEmail,
            "password": userPassword
            }) 
        .expectStatus(200);
        tokenId=loginResponse.body.data.token;
    let noteId=""

    });
it('Create new note', async () => {
    const createdNote=await spec()
    .post(`${baseUrl}/notes`)
    .withHeaders({"x-auth-token":tokenId})
    .withBody(
        {
            "title": "My first note3",
            "description": "To do list",
            "category": "Home"
        }
    )
    .expectStatus(200)
    console.log(createdNote)
})

})
