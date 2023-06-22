describe('Burger Constructor', () => {
// eslint-disable testing-library/await-async-utils
    it('Open and close modal', () => {
        cy.visit('http://localhost:3000/')
        cy.get('[data-testid=ingredientItem]').first().click()
        cy.get('body').type('{esc}')
    })

    const dNd = (i: number) => {
        cy.get('[data-testid=ingredientItem]')
            .eq(i)
            .trigger('dragstart')
        cy.get('[data-testid=wrapper]')
            .trigger('drop')
    }

    it('Drag and Drop', () => {
        cy.visit('http://localhost:3000/')

        cy.wait(1000);
        dNd(0)
        dNd(1)
        dNd(2)
        dNd(2)
    })

    it('Order', () => {
        cy.visit('http://localhost:3000/')
        cy.wait(3000);
        dNd(0)
        dNd(1)
        dNd(2)
        dNd(3)
        cy.get('button')
            .contains('Оформить заказ')
            .should('be.disabled')
        cy.get('span').contains("Личный кабинет").click()
        cy.location('pathname', { timeout: 50000 })
            .should('include', '/login')
        cy.get('input[name=login]').type('grustniiii@gmail.com')
        cy.get('input[name=password]').type('neznaika')
        cy.get('button').contains('Войти').click()
        cy.location('pathname', { timeout: 50000 })
            .should('not.include', '/login')
        cy.get('button')
            .contains('Оформить заказ')
            .click()
        cy.get('[data-testid=number]', { timeout: 100000 })
            .should(($item) => {
                expect($item.text()).not.to.equal("")
            })
    })
})
