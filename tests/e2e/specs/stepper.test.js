// https://docs.cypress.io/api/introduction/api.html

describe('steps pages', () => {
  it('it works the happy path', () => {
    goToSpepperPage()
    expect(isDisabledPreviousStep()).to.eq(true)
    expect(isInFirstStep()).to.eq(true)
    moveToNextStep()
    expect(isInSecondStep()).to.eq(true)
    moveToNextStep()
    expect(isInThirdStep()).to.eq(true)
    moveToNextStep()
    expect(isInFourthyStep()).to.eq(true)
    moveToNextStep()
    expect(isInFifthStep()).to.eq(true)
    expect(isDisabledNextStep()).to.eq(true) 
    moveToPreviousStep()
    expect(isInFourthyStep()).to.eq(true)
    moveToPreviousStep()
    expect(isInThirdStep()).to.eq(true)
    moveToPreviousStep()
    expect(isInSecondStep()).to.eq(true)
    moveToPreviousStep()
    expect(isInFirstStep()).to.eq(true)
  })


  it('it goes to order details', () => {
    goToOrderPage()
    isInOrderPage()
    clickOnDetailOrder()
    isInPageOrderDetails()
    clickOnBackButton()
  })

  function clickOnBackButton(){
    cy.get('#BACK').click()
    return true
  }

  function isInOrderPage(){
    cy.contains('INFORMACIÓN DE TUS PEDIDOS')
  }

  function clickOnDetailOrder(){
    cy.get('#e29f59ab-2793-4644-bec5-5818fd67a165').click()
    return true
  }

  function isInPageOrderDetails(){
    cy.contains('total price: 14500')
  }


  function goToOrderPage(){
    cy.visit('/orders')
  }


  function goToSpepperPage(){
    cy.visit('/')
  }

  function moveToPreviousStep() {
    cy.get('#previous-step-button').click()
  }

  function isInFifthStep(){
    cy.contains('Task 5 - Tests')
    return true
  }  

  function isInFourthyStep(){
    cy.contains('Task 4 - A new feature')
    return true
  }

  function isInThirdStep(){
    cy.contains('Task 3a - API Request')
    return true
  }

  function isInSecondStep(){
    cy.contains('Task 2a - Styles')
    return true
  }

  function isInFirstStep(){
    cy.contains('Task 1a - Bug')
    return true
  }

  function isDisabledPreviousStep(){
    cy.get('#previous-step-button').should('be.disabled')
    return true
  }

  function moveToNextStep() {
    cy.get('#next-step-button').click()
  }

  function isDisabledNextStep(){
    cy.get('#next-step-button').should('be.disabled')
    return true
  }

})
