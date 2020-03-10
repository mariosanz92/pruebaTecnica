// https://docs.cypress.io/api/introduction/api.html

describe('Stepper', () => {
  it('happy path', () => {
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

  it('navigate to next step using right arrow key', () => {
    goToSpepperPage()
    pressRightKey()
    step(1).should('have.class', 'active')
  })

  it('navigate previous step using left arrow key', () => {
    goToSpepperPage()
    pressRightKey()
    step(1).should('have.class', 'active')
    pressLeftKey()
    step(1).should('not.have.class', 'active')
  })

  it('navigate to a previous step by clicking on it' , () => {
    goToSpepperPage()
    pressRightKey()
    pressRightKey()
    pressRightKey()
    step(3).should('have.class', 'active')
    step(2).click()
    step(3).should('not.have.class', 'active')
  })
})

  const step = (number = 0) => {
    return cy.get('.step').eq(number)
  }

  const pressRightKey = () => {
    cy.get('body').trigger("keydown", {key: "ArrowRight"})
  }

  const pressLeftKey = () => {
    cy.get('body').trigger("keydown", {key: "ArrowLeft"})
  }

  const clickOnBackButton = () => {
    cy.get('#BACK').click()
    return true
  }

  const goToSpepperPage = () => {
    cy.visit('/')
  }

  const moveToPreviousStep = () => {
    cy.get('#previous-step-button').click()
  }

  const isInFifthStep = () => {
    cy.contains('Task 5 - Tests')
    return true
  }  

  const isInFourthyStep = () => {
    cy.contains('Task 4 - A new feature')
    return true
  }

  const isInThirdStep = () => {
    cy.contains('Task 3a - API Request')
    return true
  }

  const isInSecondStep = () => {
    cy.contains('Task 2a - Styles')
    return true
  }

  const isInFirstStep = () => {
    cy.contains('Task 1a - Bug')
    return true
  }

  const isDisabledPreviousStep = () => {
    cy.get('#previous-step-button').should('be.disabled')
    return true
  }

  const moveToNextStep = () => {
    cy.get('#next-step-button').click()
  }

  const isDisabledNextStep = () => {
    cy.get('#next-step-button').should('be.disabled')
    return true
  }
