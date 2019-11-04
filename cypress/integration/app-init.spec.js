/// <reference types='Cypress' />

describe('App init0', () => {
    it('List todo from API on load', () => {
        /*
        // même chose
        cy.fixture('todos')
        .then(todos => {
            cy.route('/api/todos', () => todos)
        })
        */

        cy.seedAndVisit()
        cy.get('.todo-list li').should('have.length', 4)
    })
})