it('View home page', () => {
  cy.visit('/');
  cy.get('.App', { timeout: 60000 }).should('be.visible');
});
