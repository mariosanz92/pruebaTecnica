// https://docs.cypress.io/api/introduction/api.html

describe('Orders', () => {

    it('visit order details', () => {
        goToOrderPage()
        isInOrderPage()
        clickOnDetailOrder()
        isInPageOrderDetails()
        clickOnBackButton()
        isInOrderPage()
    })

})

const clickOnBackButton = () => {
    cy.get('#BACK').click()
    return true
}

const isInOrderPage = () => {
    cy.contains('INFORMACIÓN DE TUS PEDIDOS')
}

const clickOnDetailOrder = () => {
    cy.get('.order-item_details').first().click()
    return true
}

const isInPageOrderDetails = () => {
    cy.contains('Productos')
}

const goToOrderPage = () => {
    cy.visit('/orders')
}