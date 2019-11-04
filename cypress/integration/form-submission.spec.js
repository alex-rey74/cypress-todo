describe('Form submission', () => {
    it('adds a new todo item', () => {
        cy.seedAndVisit()

        cy.get('.new-todo')
            .type('New Todo')
            .type('{enter}')

            cy.get('.todo-list')
            .contains('New Todo')

            cy.get('.new-todo')
            .should('not.have.value')
    })

    it('Shows an error when submit fail', () =>{
        cy.server()
        cy.route({
            method:'POST',
            url:'/api/todos',
            status:500,
            response:{}
        }).as('saveWithError')

        cy.seedAndVisit()

        cy.get('.new-todo')
        .type('New Todo')
        .type('{enter}')

        cy.wait('@saveWithError')
        cy.get('.error').should('be.visible')
        cy.get('.todo-list li')
        .should('have.length', 4)
        .should('not.contain', 'New Todo')
    })
})