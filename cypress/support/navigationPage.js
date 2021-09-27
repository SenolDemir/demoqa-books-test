

export function booksPage(){

    cy.get(':nth-child(6) > .element-list > .menu-list > #item-2 > .text')
        .click()

}

export function loginPage(){

    cy.get(':nth-child(6) > .element-list > .menu-list > #item-0').click()

}

export function profilePage(){

    cy.get(':nth-child(6) > .element-list > .menu-list > #item-3')
        .click()
}