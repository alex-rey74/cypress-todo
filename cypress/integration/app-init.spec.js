/// <reference types='Cypress' />

describe('App init', () => {
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

    it('List empty todo', () => {
        cy.seedAndVisit('fixture:emptyTodos')
        cy.get('.todo-list li').should('have.length', 0)
    })
})