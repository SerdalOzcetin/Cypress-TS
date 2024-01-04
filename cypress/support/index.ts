// cypress/support/index.ts


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