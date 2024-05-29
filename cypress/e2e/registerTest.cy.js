const baseUrl="https://automationteststore.com/"
const { faker } = require('@faker-js/faker');
const firstName=faker.person.firstName();
const lastName=faker.person.lastName();
const emailAdress=`${firstName}.${lastName}@gmail.com`;
const loginName=`${firstName}.${lastName}1996`;
const password="Password11!!";
const city='Bucuresti'
const livingAdress='Sector 3, Strada Nicolae Grigorescu';
const zipCode='033400'
describe('Registration test', () => {
  before(() => {
    cy.visit(baseUrl)
  })
    it('Registering with valid credentials', () => {
      cy.get('#customer_menu_top li a').click();
      cy.get('button[title="Continue"]').click();
      cy.get('#AccountFrm_firstname').type(firstName);
      cy.get('#AccountFrm_lastname').type(lastName);
      cy.get('#AccountFrm_email').type(emailAdress);
      cy.get('#AccountFrm_address_1').type(livingAdress);
      cy.get('#AccountFrm_city').type(city);
      cy.get('#AccountFrm_country_id').select('Romania');
      cy.get('#AccountFrm_zone_id').select('Bucuresti');
      cy.get('#AccountFrm_postcode').type(zipCode);
      cy.get('#AccountFrm_loginname').type(loginName);
      cy.get('#AccountFrm_password').type(password);
      cy.get('#AccountFrm_confirm').type(password);
      cy.get('#AccountFrm_newsletter0').check();
      cy.get('#AccountFrm_agree').check();
      cy.get('button.pull-right').click();
      cy.get('span.maintext').contains(' Your Account Has Been Created!')
    })
  })