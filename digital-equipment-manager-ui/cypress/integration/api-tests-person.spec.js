/// <reference types="cypress" />

describe('api-tests-person', () => {
  beforeEach( ()=>{
      //cy.intercept('POST','http://localhost:3000/item**').as('item-post');
    }
  )


  it('Person List call', () => {

    cy.request('http://localhost:3000/person/')
      .then((response) => {
        expect(response).property('status').to.equal(200)
        expect(response).property('body').to.not.empty
      })

  })

  it('Get Person by Id - ', () => {

    cy.request('http://localhost:3000/person/68gngbkw875rc6x')
      .then((response) => {
        expect(response).property('status').to.equal(200)
        cy.wrap(response.body.result.dynamic_id).should('equal', '68gngbkw875rc6x')
      })

  })

  it('Get Person by incomplete id', () => {

    cy.request({
      url: 'http://localhost:3000/person/6',
      failOnStatusCode: false,
    })
      .then((response) => {
        expect(response).property('status').to.equal(404)
        cy.wrap(response.body.result).should('equal', 'NOT_FOUND')
      })

  })

  it('Person by invalid id response NOT_FOUND', () => {

    cy.request({
      url: 'http://localhost:3000/person/bullshit',
      failOnStatusCode: false,
    })
      .then((response) => {
        expect(response).property('status').to.equal(404)
        cy.wrap(response.body.result).should('equal', 'NOT_FOUND')
      })

  })

  it('create new Person and check it', () => {

    cy.request({
      url:'http://localhost:3000/person/',
      method:'POST',
      body:{
        "firstname": "Testus",
        "lastname": "Maximus",
        "birthdate": "2021-11-10T00:00:00.000Z",
        "sex": 1,
        "id_card": "1122334455",
       "street": "Steiner Landstraße 45",
        "zip": 3500,
        "city": "Stein",
      }
    })
      .then((response) => {
        expect(response).property('status').to.equal(200)
        cy.wrap(response.body.result.id).should('not.be.empty')
        let createdId = response.body.result.id;
        cy.request({
          url: 'http://localhost:3000/person/' + createdId,
          method:'GET',
        })
          .then((response) => {
            expect(response).property('status').to.equal(200)
            cy.wrap(response.body.result.dynamic_id).should('equal', createdId)
          })
      })

  })
  /*
  it('Edit 1 Attribute from newly created person', () => {
    let personId;
    cy.request({
      url: 'http://localhost:3000/person/',
      method: 'POST',
      body: {
        "firstname": "Testus",
        "lastname": "Editus",
        "birthdate": "1977-11-05",
        "sex": 1,
        "id_card": "112233445566",
        "street": "Steiner Landstraße 45",
        "zip": 3500,
        "city": "Stein",
      }
    })
      .then((response) => {
        expect(response).property('status').to.equal(200)
        cy.wrap(response.body.result.id).should('not.be.empty')
        personId = response.body.result.id;
        cy.request({
          url: 'http://localhost:3000/person/' + personId,
          method: 'PUT',
          body: {
            "lastname": "Edited",
          }
        })
          .then((response) => {
            expect(response).property('status').to.equal(200)
          })
      }).then(() => {
      cy.request({
        url: 'http://localhost:3000/person/' + personId,
        method: 'GET',
      }).should((response) => {
        expect(response).property('status').to.equal(200)
        expect(response.body.result).property('lastname').to.equal('Edited');
      })
    })
  })
  */
})
