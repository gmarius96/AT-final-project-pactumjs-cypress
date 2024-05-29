const baseUrl="https://automationteststore.com/"
const { faker } = require('@faker-js/faker');
const loginName="Nella.Swaniawski1996";
const password="Password11!!";
const changedName="Marius";
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
  // this is the part that changes the username
  cy.get('#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > ul > li:nth-child(1) > a').click();
  cy.get('#AccountFrm_firstname').clear().type(changedName);
  cy.get('#AccountFrm > div.form-group > div > button').click();
  cy.get('#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div.alert.alert-success').contains(' Success: Your account has been successfully updated.')
    })
  })