describe('Destroy items', () => {
    it('Show a button to destroy an item', () => {
        cy.seedAndVisit()

        cy.get('.todo-list li')
        .first()
        .find('.destroy')
        .invoke('show')
        .click()
    })

    it('Show a button to destroy an item', () => {
        cy.seedAndVisit()

        cy.server();
        cy.route({
            method: 'DELETE',
            url: '/api/todos/*',
            response: {}
        }).as('delete')

        cy.get('.todo-list li')
        .first()
        .find('.destroy')
        .invoke('show')
        .click()

        cy.wait('@delete')

        cy.get('.todo-list li').should('have.length', 3)
    })
})