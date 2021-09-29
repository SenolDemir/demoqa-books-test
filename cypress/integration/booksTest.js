import *as navigateTo from '../support/navigationPage';


describe('Books Store Function Test',() => {
    
    before('Navigate to main page', () => {
    
        cy.visit('https://demoqa.com/books')
       
        
    })


    it('Stored books date should be same in Frontend and Backend', () => {

        cy.request({
            method: 'GET',
            url: 'https://demoqa.com/BookStore/v1/Books'
        })
        .should((response) => {
            
            // Verify the response status is as expected
            expect(response.status).to.eq(200)
            // Verify there are 8 books in database as it shown in UI
            expect(response.body.books.length).to.be.eq(8)
            //Verify each book has the data as listed
            expect(response.body.books[0]).to.have.all.keys(
                'isbn', 'title', 'subTitle', 'author', 'publish_date', 'publisher', 'pages', 'description', 'website'
            )
            
        });
        
    })
    
    it('Verify first book data is displayed same as in the backend side ', () => {
        let title = 'Git Pocket Guide'
        let author = 'Richard E. Silverman'
        let publisher = 'O\'Reilly Media'

        //3. Get the title, aothor, publisher  information of first book in the backend by using API Service
        cy.request({
            method: 'GET',
            url: 'https://demoqa.com/BookStore/v1/Books'
        })
        .should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.books[0].title).to.eq(title)
            expect(response.body.books[0].author).to.eq(author)
            expect(response.body.books[0].publisher).to.eq(publisher)

        })

        //4. Get the title, aothor, publisher information of book first displayed in the page
        cy.get('.rt-tbody').find('[role="rowgroup"]').then((tableRow) => {
            cy.wrap(tableRow).find('[role="gridcell"]').eq(1).should('contain', title)
            cy.wrap(tableRow).find('[role="gridcell"]').eq(2).should('contain', author)
            cy.wrap(tableRow).find('[role="gridcell"]').eq(3).should('contain', publisher)
        })


        
    });

       
        
        
});






