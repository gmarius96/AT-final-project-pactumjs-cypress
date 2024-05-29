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
  cy.get('body > div > header > div.headerstrip.navbar.navbar-inverse > div > div.navbar-header.header-logo > a > img').click();
  cy.get('#block_frame_featured_1769 > div > div:nth-child(1) > div.thumbnail > div.pricetag.jumbotron > a > i').click();
  cy.get('body > div > header > div.container-fluid > div > div.block_7 > ul > li > a').click();
  cy.get('#cart_checkout2').click();
  cy.get('#checkout_btn').click();
  cy.get('span.maintext').contains('YOUR ORDER HAS BEEN PROCESSED!')
    })
  })