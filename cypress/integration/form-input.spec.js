/// <reference types='Cypress' />
 
describe('Form input', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Focuses the input', () => {
        cy.focused()
        .should('have.class', 'new-todo')
    })

    it('Accept input', () => {
        const testValue = 'New todo';

        cy.get('.new-todo')
            .type(testValue)
            .should('have.value', testValue)
    })
})