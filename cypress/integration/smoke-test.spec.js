describe('Smoke Test', () => {
    it('Add a new item', () => {
        cy.visit('/')

        cy.get('.new-todo')
        .type('New todo')
        .type('{enter}')

        cy.get('.todo-list li')
        .contains('New todo')
    })
})