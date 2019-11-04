/// <reference types='Cypress' />
 
describe('Form input', () => {
    it('Focuses the input', () => {
        cy.visit('/')
        cy.focused()
        .should('have.class', 'new-todo')
    })

    it('Accept input', () => {
        const testValue = 'New value';

        cy.visit('/')
        cy.get('.new-todo')
            .type(testValue)
            .should('have.value', testValue)
    })
})