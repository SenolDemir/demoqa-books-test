import *as navigateTo from '../support/navigationPage';

describe('Login Function Test',() => {

    before('Navigate to main page', () => {
    
        cy.visit('https://demoqa.com/books')
        
    })
    it('Login to application', () => {
        
        navigateTo.loginPage()
        cy.get('#userName').type(Cypress.env('username'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#login').click()
    });

    it('Verify logged in successfully', () => {

        cy.url().should('eq', 'https://demoqa.com/books')
        
        cy.get('#userName-value').invoke('text').then((text1) => {
            expect(text1).to.eq(Cypress.env('username'))
        })
                
    });

    it('Log out application succesfully', () => {

        cy.get('#submit').click()
        cy.url().should('not.eq', 'https://demoqa.com/books')
        cy.get('#userName-value').should('not.exist')

        
    });
})