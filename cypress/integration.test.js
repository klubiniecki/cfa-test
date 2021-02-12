describe('Home page integration test', () => {
  it('displays home page', () => {
    cy.visit('/');
    cy.get('.App', { timeout: 60000 }).should('be.visible');
  });

  it('changes on button click', () => {
    cy.visit('/');
    cy.get('button').contains('Blue. Click me to change color!');
    cy.get('button').click();
    cy.get('button').contains('Red. Click me to change color!');
  });
});
