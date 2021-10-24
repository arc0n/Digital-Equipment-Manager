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
        cy.wrap(response.body.result.length).should('equal', 1)
        cy.wrap(response.body.result[0].dynamic_id).should('equal', '4z8k9a6bqx7u7ad')
        expect(response.body.result[0].dynamic_id).to.equal('4z8k9a6bqx7u7ad')
      })

  })

  it('item by invalid id response NOT_FOUND', () => {

    cy.request('http://localhost:3000/item/bullshit')
      .then((response) => {
       // expect(response).property('status').to.equal(404)
        cy.wrap(response.body.message).should('equal', 'NOT_FOUND')
      })

  })

  it('create new item and check it', () => {
    let resolveFn;
    const postOngoing = new Promise((resolve, reject) => {
      resolveFn = resolve;
    });

    cy.request({
      url:'http://localhost:3000/item/',
      method:'POST',
      body:{
        "serial_number": "12345",
        "photo": "/",
        "description": "",
        "status": "aktiv",
        "item_model_id": 1,
        "model_name": "S-12",
        "item_type": "Schlagstock",
        "item_type_id": 1,
        "item_type_description": "Ein langes zylindrisches Instrument."
      }
    })
      .then((response) => {
        expect(response).property('status').to.equal(200)
        cy.wrap(response.body.message).should('equal', 'Item created successfully.')
        resolveFn(response.body.result.dynamic_id)
      })
    postOngoing.then((id)=>{
      cy.request('http://localhost:3000/item/' + id)
        .then((response) => {
          expect(response).property('status').to.equal(200)
          cy.wrap(response.body.result.length).should('equal', 1)
          cy.wrap(response.body.result[0].dynamic_id).should('equal', id)
        })
    })
  })

})
