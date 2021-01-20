describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })
})

describe('can navigate to sub-page', function() {
  it('clicking on Ivysaur opens sub-page', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
      .find('div.list-item-name')
      .as('selected')
    cy.get('@selected')
      .contains('ivysaur')
      .click()

    cy.url().should('include', 'pokemon/ivysaur')
    cy.contains('ivysaur')
    cy.contains('Hidden ability')
    cy.contains('overgrow')
  })
})
