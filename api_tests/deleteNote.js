
const { spec,request } = require('pactum');
baseUrl="https://practice.expandtesting.com/notes/api";
const userEmail = "Elliot.Kozey19@yahoo.com";
const userPassword="Password11!!";
describe('Deleting note', () => {
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
    });
it('Create new note', async () => {
    const createdNote=await spec()
    .post(`${baseUrl}/notes`)
    .withHeaders({"x-auth-token":tokenId})
    .withBody(
        {
            "title": "Testing for deletion",
            "description": "To delete",
            "category": "Work"
        }
    )
    .expectStatus(200)
    const noteId=createdNote.body.data.id;
    console.log(noteId)
})
it('Delete new note', async () => {
    await spec()
    .delete(`${baseUrl}/notes/${noteId}`)
    .expectStatus(200)
})
})
