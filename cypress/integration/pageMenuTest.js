import *as navigateTo from '../support/navigationPage';


describe('Page Menu Buttons display correctly', () => {

    before('Navigate to main page', () => {
    
        cy.visit('https://demoqa.com/books')
        
        
    })

    it('Login Button should be highlighted when clicked', () => {

        
        // Click to login page and verify the login button backround is changed or not
        navigateTo.loginPage()

        cy.url().then((url) => {
            if(url.includes('login')){
                cy.get(':nth-child(6) > .element-list > .menu-list > #item-0')
                    .should('have.css', 'background-color', 'rgb(170, 170, 170)')

                cy.get(':nth-child(6) > .element-list > .menu-list > #item-2')
                    .should('have.css', 'background-color', 'rgb(204, 204, 204)')
                
                cy.get(':nth-child(6) > .element-list > .menu-list > #item-3')
                    .should('have.css', 'background-color', 'rgb(204, 204, 204)')

            }

        })
        
    });

    it('Books Store Button should be highlighted when clicked', () => {

         // Click to books page and verify the books store button backround is changed or not
         navigateTo.booksPage()

         cy.url().then((url) => {
             if(url.includes('books')){
                 cy.get(':nth-child(6) > .element-list > .menu-list > #item-0')
                     .should('have.css', 'background-color', 'rgb(204, 204, 204)')
     
                 cy.get(':nth-child(6) > .element-list > .menu-list > #item-2')
                     .should('have.css', 'background-color', 'rgb(170, 170, 170)')
                     
                 cy.get(':nth-child(6) > .element-list > .menu-list > #item-3')
                     .should('have.css', 'background-color', 'rgb(204, 204, 204)')
     
             }
 
         })
        
    });

    it('Profile Page Button should be highlighted when clicked', () => {

       // Click to profile page and verify the profile button backround is changed or not
        navigateTo.profilePage()

        cy.url().then((url) => {
            if(url.includes('profile')){
                cy.get(':nth-child(6) > .element-list > .menu-list > #item-0')
                    .should('have.css', 'background-color', 'rgb(204, 204, 204)')
    
                cy.get(':nth-child(6) > .element-list > .menu-list > #item-2')
                    .should('have.css', 'background-color', 'rgb(204, 204, 204)')
                    
                cy.get(':nth-child(6) > .element-list > .menu-list > #item-3')
                    .should('have.css', 'background-color', 'rgb(170, 170, 170)')
    
            }

        })
        
    });


})