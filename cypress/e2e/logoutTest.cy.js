const baseUrl="https://automationteststore.com/"
const { faker } = require('@faker-js/faker');
const loginName="Nella.Swaniawski1996";
const password="Password11!!";
describe('Modifying account name', () => {
  before(() => {
    cy.visit(baseUrl)
  })
    it('Change user name', () => {
  // this is the part that logs in 
  cy.get('#customer_menu_top > li > a').click();
  cy.get('#loginFrm_loginname').type(loginName);
  cy.get('#loginFrm_password').type(password);
  cy.get('button.btn:nth-child(7)').click();
  cy.get('#topnav > select').select('https://automationteststore.com/index.php?rt=account/logout')
  cy.get('#maincontainer > div > div > div > div > section > p:nth-child(3)').contains('You have been logged off your account. It is now safe to leave the computer.')
    })
  })