// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

export { }
declare global {
    namespace Cypress {
        interface Chainable {
            login(username: string, password: string): Chainable<JQuery<HTMLElement>>
        }
    }
}

Cypress.Commands.add('login', (username, password) => {

    cy.session([username, password], () => {

        cy.visit('https://github.com/');
        cy.get('div.width-lg-auto > :nth-child(2) > .d-inline-block').should('be.visible').click();
        cy.get('#login_field').should('be.visible').type(username);
        cy.get('#password').should('be.visible').type(password);
        cy.get('.position-relative > .btn').should('be.visible').click();
        
    })

})