it('View home page', () => {
  cy.visit('/');
  cy.get('.test', { timeout: 60000 }).should('be.visible');
});
