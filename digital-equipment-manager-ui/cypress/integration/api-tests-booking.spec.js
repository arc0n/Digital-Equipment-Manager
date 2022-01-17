/// <reference types="cypress" />

describe('api-tests-booking', () => {
  beforeEach( ()=>{

    }
  )


  it('Booking List call', () => {

    cy.request({
      url: 'http://localhost:3000/booking/',
      header: {
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGVtYWlsLmNvbSIsImlhdCI6MTY0MjQ0OTE2NCwiZXhwIjoxNjQzMDQ5MTY0fQ.psgtoANRSA__w_I8s1GeG1szvgthobPl-46y7lr-MEg"

      }
    })
      .then((response) => {
        expect(response).property('status').to.equal(200)
        expect(response).property('body').to.not.empty
      })

  })

  it('create new Booking and check it', () => {

    cy.request({
      url:'http://localhost:3000/booking/',
      method:'POST',
      header: {
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGVtYWlsLmNvbSIsImlhdCI6MTY0MjQ0OTE2NCwiZXhwIjoxNjQzMDQ5MTY0fQ.psgtoANRSA__w_I8s1GeG1szvgthobPl-46y7lr-MEg"

      },
      body:{
        "item_id": "c7341j0vum6weq2",
        "person_id": "68gngbkw875rc6x",
      }
    })
      .then((response) => {
        expect(response).property('status').to.equal(200)
        cy.request({
          url: 'http://localhost:3000/booking/',
          header: {
            Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGVtYWlsLmNvbSIsImlhdCI6MTY0MjQ0OTE2NCwiZXhwIjoxNjQzMDQ5MTY0fQ.psgtoANRSA__w_I8s1GeG1szvgthobPl-46y7lr-MEg"

          }
        })
          .then((response) => {
            expect(response).property('status').to.equal(200)
            expect(response).property('body').to.not.empty
          })
      })
  })

  it('Return item', () => {
    cy.request({
      url: 'http://localhost:3000/booking/',
      method: 'PUT',
      header: {
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGVtYWlsLmNvbSIsImlhdCI6MTY0MjQ0OTE2NCwiZXhwIjoxNjQzMDQ5MTY0fQ.psgtoANRSA__w_I8s1GeG1szvgthobPl-46y7lr-MEg"

      },
      body:{
        "item_id": "c7341j0vum6weq2",
      }
    }).then((response) => {
      expect(response).property('status').to.equal(200)
      //cy.wrap(response.body.result).should('equal', 'true')
    })
  })

  it('Try to create Booking with only item id', () => {

    cy.request({
      url:'http://localhost:3000/booking/',
      method:'POST',
      failOnStatusCode: false,
      header: {
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGVtYWlsLmNvbSIsImlhdCI6MTY0MjQ0OTE2NCwiZXhwIjoxNjQzMDQ5MTY0fQ.psgtoANRSA__w_I8s1GeG1szvgthobPl-46y7lr-MEg"

      },
      body:{
        "item_id": "c7341j0vum6weq2",
      }
    })
      .then((response) => {
        expect(response).property('status').to.equal(500)
        cy.wrap(response.body.result).should('equal', 'INVALID_REQUEST')
      })
  })

  it('Try to create Booking with only person id', () => {

    cy.request({
      url:'http://localhost:3000/booking/',
      method:'POST',
      header: {
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGVtYWlsLmNvbSIsImlhdCI6MTY0MjQ0OTE2NCwiZXhwIjoxNjQzMDQ5MTY0fQ.psgtoANRSA__w_I8s1GeG1szvgthobPl-46y7lr-MEg"

      },
      failOnStatusCode: false,
      body:{
        "person_id": "68gngbkw875rc6x",
      }
    })
      .then((response) => {
        expect(response).property('status').to.equal(500)
        cy.wrap(response.body.result).should('equal', 'INVALID_REQUEST')
      })
  })
/*
  it('Try to create Booking with invalid id', () => {

    cy.request({
      url:'http://localhost:3000/booking/',
      method:'POST',
      failOnStatusCode: false,
      body:{
        "person_id": "68gngbkw875rc6x",
        "item_id": "doesnotexist",
      }
    })
      .then((response) => {
        expect(response).property('status').to.equal(500)
        cy.wrap(response.body.result).should('equal', 'INVALID_REQUEST')
      })
  })
*/

  it('create two Bookings on the same item', () => {

    cy.request({
      url:'http://localhost:3000/booking/',
      method:'POST',
      header: {
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGVtYWlsLmNvbSIsImlhdCI6MTY0MjQ0OTE2NCwiZXhwIjoxNjQzMDQ5MTY0fQ.psgtoANRSA__w_I8s1GeG1szvgthobPl-46y7lr-MEg"

      },
      body:{
        "item_id": "yh63pmq4jq2qa46",
        "person_id": "68gngbkw875rc6x",
      }
    })
      .then((response) => {
        expect(response).property('status').to.equal(200)
            cy.request({
              url:'http://localhost:3000/booking/',
              method:'POST',
              failOnStatusCode: false,
              header: {
                Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGVtYWlsLmNvbSIsImlhdCI6MTY0MjQ0OTE2NCwiZXhwIjoxNjQzMDQ5MTY0fQ.psgtoANRSA__w_I8s1GeG1szvgthobPl-46y7lr-MEg"

              },
              body:{
                "item_id": "yh63pmq4jq2qa46",
                "person_id": "cjz7282s5y9ro9d",
              }
            })
              .then((response) => {
                expect(response).property('status').to.equal(409)
                cy.wrap(response.body.result).should('equal', 'UNFINISHED_BOOKING')
                cy.request({
                  url: 'http://localhost:3000/booking/',
                  method: 'PUT',
                  body:{
                    "item_id": "yh63pmq4jq2qa46",
                  }
                }).then((response) => {
                  expect(response).property('status').to.equal(200)
                  //cy.wrap(response.body.result).should('equal', 'true')
                })
              })
          })


  })


  it('return item, that isnt borrowed', () => {
    let itemId;
    cy.request({
      url: 'http://localhost:3000/booking/4z8k9a6bqx7u7ad',
      failOnStatusCode: false,
      header: {
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGVtYWlsLmNvbSIsImlhdCI6MTY0MjQ0OTE2NCwiZXhwIjoxNjQzMDQ5MTY0fQ.psgtoANRSA__w_I8s1GeG1szvgthobPl-46y7lr-MEg"

      },
      method: 'PUT',
    }).then((response) => {
      expect(response).property('status').to.equal(404)
    })
  })
})
