// hotrod/cypress/e2e/hotrod-e2e.cy.js

describe('HotRod E2E Spec', () => {
  it('should request a ride successfully', () => {
    // Request a ride
    cy.requestRide('1', '123');

    // Check that the route is being resolved
    cy.contains('Resolving routes').should('be.visible');

    // Verify that a driver has been assigned
    cy.contains(/Driver (.*) arriving in (.*)./).should('be.visible');

  });
});

