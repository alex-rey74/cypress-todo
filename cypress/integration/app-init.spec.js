/// <reference types='Cypress' />

describe('App init0', () => {
    it('List todo from API on load', () => {
        // crée un mock du serveur API
        cy.server()

        // charge une fixture
        cy.route('GET', '/api/todos', 'fixtures:todos')

        // même chose
        cy.fixture('todos')
        .then(todos => {
            cy.route('/api/todos', () => todos)
        })



        cy.visit('/');
        cy.get('.todo-list li').should('have.length', 4)
    })
})