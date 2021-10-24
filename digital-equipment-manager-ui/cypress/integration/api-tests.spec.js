/// <reference types="cypress" />

describe('apitests', () => {

  it('displays two todo items by default', () => {

    cy.request('http://localhost:3000/item/')
      .then((response) => {
        expect(response).property('status').to.equal(200)
       //expect(response).property('body').to.have.property('length').and.be.gt(10)

        cy.wrap(response.body.result.length).should('be.greaterThan', 10)
      })

  })


})
