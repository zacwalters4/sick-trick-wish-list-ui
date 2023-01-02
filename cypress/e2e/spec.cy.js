describe('sick trick testing', () => {

  //Write tests covering what should be displayed on the page when the user first visits.
  // Write a test that checks that when data is put into the form, the value is reflected in that form input.
  // Write a test to check the user flow of adding a new trick to the DOM.
  beforeEach(() => {
    cy.intercept("Get", 'http://localhost:3001/api/v1/tricks', 
    { fixture: 'tricks.json' })
    cy.visit('http://localhost:3000/')
  })

  it('should have a title', () => {
    cy.contains('Sick Trick Wish List')
  })

  it('should have a form containing four input fields', () => {
    cy.get('Form')
      .find('input[name="name"]')
        .should('have.attr', 'name', 'name')
    cy.get('Form')
      .find('input[name="tutorial"]')
        .should('have.attr', 'name', 'tutorial')
    cy.get('Form')
      .find('select[name="stance"]')
        .should('have.attr', 'name', 'stance')
    cy.get('Form')
      .find('select[name="obstacle"]')
        .should('have.attr', 'name', 'obstacle')
  })

  it('should display tricks', () => {
    cy.get('.tile')
      .contains('regular treflip')
    cy.get('.tile')
      .contains('Obstacle: stairs')
    cy.get('.tile')
      .contains('Link to Tutorial')
  })

  it('should contain the correct value when Choose your stance is changed', () => {
    cy.get('form')
      .find('select[name="stance"]')
        .should('have.value', '')
          .select('regular')
            .should('have.value', 'regular')   
  })

  it('should contain the correct value when Choose your obstacle is changed', () => {
    cy.get('form')
      .find('select[name="obstacle"]')
        .should('have.value', '')
          .select('stairs')
            .should('have.value', 'stairs')  
  })

  it('should contain the correct value when Name of Trick is changed', () => {
    cy.get('form')
      .find('input[name="name"]')
        .should('have.value', '')
          .type('Cheese99')
            .should('have.value', 'Cheese99')  
  })

  it('should contain the correct value when Name of Trick is changed', () => {
    cy.get('form')
      .find('input[name="tutorial"]')
        .should('have.value', '')
          .type('https://www.youtube.com/watch?v=9siogRgZo3Y')
            .should('have.value', 'https://www.youtube.com/watch?v=9siogRgZo3Y')  
  })

  it('should be able to add a new trick ', () => {
    cy.get('form')
      .find('select[name="stance"]')
      .select('regular')
    cy.get('form')
      .find('input[name="name"]')
        .type('Ollie')
    cy.get('form')
      .find('input[name="tutorial"]')
        .type('https://www.youtube.com/watch?v=KJnZvKwgZaA')
    cy.get('form')
      .find('select[name="obstacle"]')
          .select('flatground')
    cy.get('form')
      .find('button').click()
    cy.get('.tile')
      .contains('regular Ollie')
    cy.get('.tile')
      .contains('Obstacle: flatground')
    cy.get('.tile')
      .contains('https://www.youtube.com/watch?v=KJnZvKwgZaA')

  })


})