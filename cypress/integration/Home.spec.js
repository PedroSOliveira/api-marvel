
describe(`Home`, () => {

    const USERNAME = '07499589366'
    const PASSWORD = '87489322vn'
    const APP_SERVER_KEY = '9b7447d51add62ea1a1df211e87985cb'
    const modelName = 'A teste cypress model'
    const className = 'Test'
    const classDescription = 'TES'


    let token;


    Cypress.on('uncaught:exception', (err) => {
        return false
    })

    it('Filter comics', () => {

        cy.visit('http://localhost:3000/');
        cy.get('.header-filter > input').click();
        cy.get('.header-filter > input').type('Avengers');
        cy.get('.header-filter > .button').click();
        cy.get('body').contains('Avengers');


    })

    it('Navigation to map', () => {

        cy.visit('http://localhost:3000/');
        cy.get('.sidenav-item:nth-child(2) > .icon-light').click();
        cy.url().should('eq', 'http://localhost:3000/map')

    })

    it('Register address', () => {

        cy.visit('http://localhost:3000/');
        cy.get('.aside-adress > input').click();
        cy.get('.aside-adress > input').type('Aracoiaba');
        cy.get('.aside-adress > .button').click();

    })







    // it(`create new model `, () => {
    //     cy.visit('http://localhost:3000');
    //     cy.get('[data-cy=new-model]').click();
    //     cy.get('[data-cy=create-new-model]').click();
    //     cy.get('[data-cy=input-new-model]').type(modelName);
    //     cy.get('.ant-select-selection__rendered').click();
    //     cy.get('body').contains('Spacy').click();
    //     cy.get('[data-cy=new-class]').click();
    //     cy.get('[data-cy=input-new-class-name]').type(className);
    //     cy.get('[data-cy=input-new-class-description]').type(classDescription);
    //     cy.get('.ant-modal-footer .ant-btn').click();
    //     cy.get('[data-cy=save-new-model]').click();

    // })


})