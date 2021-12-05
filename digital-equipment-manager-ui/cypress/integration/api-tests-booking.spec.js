/// <reference types="cypress" />

describe('api-tests-booking', () => {
  beforeEach( ()=>{

    }
  )


  it('Booking List call', () => {

    cy.request('http://localhost:3000/booking/')
      .then((response) => {
        expect(response).property('status').to.equal(200)
        expect(response).property('body').to.not.empty
      })

  })

  it('create new Booking and check it', () => {

    cy.request({
      url:'http://localhost:3000/booking/',
      method:'POST',
      body:{
        "item_id": "4z8k9a6bqx7u7ad",
        "person_id": "68gngbkw875rc6x",
      }
    })
      .then((response) => {
        expect(response).property('status').to.equal(200)
        cy.request('http://localhost:3000/booking/')
          .then((response) => {
            expect(response).property('status').to.equal(200)
            expect(response).property('body').to.not.empty
          })
      })
  })
  it('create two Bookings on the same item', () => {

    cy.request({
      url:'http://localhost:3000/booking/',
      method:'POST',
      body:{
        "item_id": "q6irq09w1aha126",
        "person_id": "68gngbkw875rc6x",
      }
    })
      .then((response) => {
        expect(response).property('status').to.equal(200)
        cy.request('http://localhost:3000/booking/')
          .then((response) => {
            expect(response).property('status').to.equal(200)
            expect(response).property('body').to.not.empty
          })
      })

    cy.request({
      url:'http://localhost:3000/booking/',
      method:'POST',
      body:{
        "item_id": "q6irq09w1aha126",
        "person_id": "68gngbkw875rc6x",
      }
    })
      .then((response) => {
        expect(response).property('status').to.equal(500)
        cy.wrap(response.body.result).should('equal', 'INVALID_REQUEST')
      })
  })

  it('Return item', () => {
    let itemId;
    cy.request({
      url: 'http://localhost:3000/booking/4z8k9a6bqx7u7ad',
      method: 'PUT',
    }).then((response) => {
        expect(response).property('status').to.equal(200)
        cy.wrap(response.body.result).should('not.be.empty')

        })
      })
  it('return item, that isnt borrowed', () => {
    let itemId;
    cy.request({
      url: 'http://localhost:3000/booking/4z8k9a6bqx7u7ad',
      method: 'PUT',
    }).then((response) => {
      expect(response).property('status').to.equal(200)
      cy.wrap(response.body.result).should('not.be.empty')
    })
  })
})
