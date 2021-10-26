/// <reference types="cypress" />

describe('api-tests', () => {
  beforeEach( ()=>{
    //cy.intercept('POST','http://localhost:3000/item**').as('item-post');
  }
)


  it('item response result not empty', () => {

    cy.request('http://localhost:3000/item/')
      .then((response) => {
        expect(response).property('status').to.equal(200)
       //expect(response).property('body').to.have.property('length').and.be.gt(10)
        cy.wrap(response.body.result.length).should('be.greaterThan', 10)
      })

  })

  it('item by id response result not empty', () => {

    cy.request('http://localhost:3000/item/4z8k9a6bqx7u7ad')
      .then((response) => {
        expect(response).property('status').to.equal(200)
        //cy.wrap(response.body.result.length).should('equal', 1)
        cy.wrap(response.body.result.dynamic_id).should('equal', '4z8k9a6bqx7u7ad')
        expect(response.body.result.dynamic_id).to.equal('4z8k9a6bqx7u7ad')
      })

  })

  it('item by invalid id response NOT_FOUND', () => {

    cy.request({
      url: 'http://localhost:3000/item/bullshit',
      failOnStatusCode: false,
    })
      .then((response) => {
        expect(response).property('status').to.equal(404)
        cy.wrap(response.body.result).should('equal', 'NOT_FOUND')
      })

  })

  it('create new item and check it', () => {

    cy.request({
      url:'http://localhost:3000/item/',
      method:'POST',
      body:{
        "serial_number": "12345",
        "photo": "/",
        "description": "test",
        "status": "aktiv",
        "item_model_id": 1,
        "item_type_id": 1,
      }
    })
      .then((response) => {
        expect(response).property('status').to.equal(200)
        let createdId = response.body.result.dynamic_id;
        cy.request({
          url: 'http://localhost:3000/item/' + response.body.result.dynamic_id,
          method:'GET',
        })
          .then((response) => {
            expect(response).property('status').to.equal(200)
            cy.wrap(response.body.result.dynamic_id).should('equal', createdId)
          })
      })

  })

  it('try to create item without item_model_id', () => {

    cy.request({
      url:'http://localhost:3000/item/',
      method:'POST',
      failOnStatusCode: false,
      body:{
        "serial_number": "12345",
        "photo": "/",
        "description": "",
        "status": "aktiv",
        //"item_model_id": 1,
        "item_type_id": 1,
      }
    })
      .then((response) => {
        expect(response).property('status').to.equal(500)
        cy.wrap(response.body.result).should('equal', 'INVALID_REQUEST')
      })

    })

  it('Delete newly created item', () => {
    const createId = new Promise((resolve, reject) => {
    });

    cy.request({
      url:'http://localhost:3000/item/',
      method:'POST',
      body:{
        "serial_number": "12345",
        "photo": "/",
        "description": "test",
        "status": "aktiv",
        "item_model_id": 1,
        "item_type_id": 1,
      }
    })
      .then((response) => {
        expect(response).property('status').to.equal(200)
        let createdId = response.body.result.dynamic_id;
        cy.request({
          url:'http://localhost:3000/item/' + response.body.result.dynamic_id,
          method: 'DELETE',
        })
          .then((response) => {
            expect(response).property('status').to.equal(200)
            cy.wrap(response.body.result).should('equal', createdId)
          })
      })

   })

  it('Edit newly created item', () => {
    const createId = new Promise((resolve, reject) => {
    });

    cy.request({
      url:'http://localhost:3000/item/',
      method:'POST',
      body:{
        "serial_number": "12345",
        "photo": "/",
        "description": "test",
        "status": "aktiv",
        "item_model_id": 1,
        "item_type_id": 1,
      }
    })
      .then((response) => {
        expect(response).property('status').to.equal(200)
        cy.request({
          url:'http://localhost:3000/item/' + response.body.result.dynamic_id,
          method: 'PUT',
          body:{
            "serial_number": "123456",
          }
        })
          .then((response) => {
            expect(response).property('status').to.equal(200)
            cy.wrap(response.body.result.serail_number).should('equal', '123456');
          })
      })

  })

})
