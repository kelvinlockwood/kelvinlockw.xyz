describe('Demo test', () => {
  it('loads', () => {
    cy.visit('/');
    cy.contains(
      'h1',
      "I'm Kelvin Lockwood, a non-technical startup founder and all-rounder on products, subscription services and marketplaces."
    ).should('be.visible');
  });
});
