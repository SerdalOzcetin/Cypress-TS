import  from "../../support/index"
describe('Cy.session',()=>{


    beforeEach(() => {
        cy.login("özçetinserdal@gmail.com","Qazwsxedc22##")
    });
    
    
    it('gitHub via cy.session', () => {
        
        cy.visit('https://github.com/');
        cy.get('.AppHeader-context-item').should('be.visible').click();
        cy.get('[data-target="loading-context.details"] > .Details > .js-repos-container > .list-style-none > :nth-child(3) > .width-full > .wb-break-word').should('be.visible').click();
        cy.get(':nth-child(1) > .AppHeader-context-item').should('be.visible').click();
    });


})