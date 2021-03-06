/// <reference types="cypress" />

describe('api-tests-item', () => {
  beforeEach(() => {
    }
  )


  it('item response result not empty', () => {

    cy.request({
      url: 'http://localhost:3000/item/',
      headers: {
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGVtYWlsLmNvbSIsImlhdCI6MTY0MjQ0OTE2NCwiZXhwIjoxNjQzMDQ5MTY0fQ.psgtoANRSA__w_I8s1GeG1szvgthobPl-46y7lr-MEg"
      }
    })
      .then((response) => {
        expect(response).property('status').to.equal(200)
        //expect(response).property('body').to.have.property('length').and.be.gt(10)
        cy.wrap(response.body.result.length).should('be.greaterThan', 10)
      })

  })

  it('item by id response result not empty', () => {

    cy.request({
      url: 'http://localhost:3000/item/4z8k9a6bqx7u7ad',
      headers: {
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGVtYWlsLmNvbSIsImlhdCI6MTY0MjQ0OTE2NCwiZXhwIjoxNjQzMDQ5MTY0fQ.psgtoANRSA__w_I8s1GeG1szvgthobPl-46y7lr-MEg"

      }
    })
      .then((response) => {
        expect(response).property('status').to.equal(200)
        cy.wrap(response.body.result.dynamic_id).should('equal', '4z8k9a6bqx7u7ad')
        expect(response.body.result.dynamic_id).to.equal('4z8k9a6bqx7u7ad')
      })

  })

  it('item by incomplete id', () => {

    cy.request({
      url: 'http://localhost:3000/item/s',
      failOnStatusCode: false,
      headers: {
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGVtYWlsLmNvbSIsImlhdCI6MTY0MjQ0OTE2NCwiZXhwIjoxNjQzMDQ5MTY0fQ.psgtoANRSA__w_I8s1GeG1szvgthobPl-46y7lr-MEg"

      }
    })
      .then((response) => {
        expect(response).property('status').to.equal(404)
        cy.wrap(response.body.result).should('equal', 'NOT_FOUND')
      })

  })

  it('item by invalid id response NOT_FOUND', () => {

    cy.request({
      url: 'http://localhost:3000/item/bullshit',
      failOnStatusCode: false,
      headers: {
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGVtYWlsLmNvbSIsImlhdCI6MTY0MjQ0OTE2NCwiZXhwIjoxNjQzMDQ5MTY0fQ.psgtoANRSA__w_I8s1GeG1szvgthobPl-46y7lr-MEg"

      }
    })
      .then((response) => {
        expect(response).property('status').to.equal(404)
        cy.wrap(response.body.result).should('equal', 'NOT_FOUND')
      })

  })

  it('create new item and check it', () => {

    cy.request({
      url: 'http://localhost:3000/item/',
      method: 'POST',
      body: {
        "serial_number": "12345",
        "photo": "/",
        "description": "test",
        "status": "aktiv",
        "item_model_id": 1,
        "item_type_id": 1,
      },
      headers: {
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGVtYWlsLmNvbSIsImlhdCI6MTY0MjQ0OTE2NCwiZXhwIjoxNjQzMDQ5MTY0fQ.psgtoANRSA__w_I8s1GeG1szvgthobPl-46y7lr-MEg"

      }
    })
      .then((response) => {
        expect(response).property('status').to.equal(200)
        cy.wrap(response.body.result.id).should('not.be.empty')
        let createdId = response.body.result.id;
        cy.request({
          url: 'http://localhost:3000/item/' + createdId,
          method: 'GET',
          headers: {
            Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGVtYWlsLmNvbSIsImlhdCI6MTY0MjQ0OTE2NCwiZXhwIjoxNjQzMDQ5MTY0fQ.psgtoANRSA__w_I8s1GeG1szvgthobPl-46y7lr-MEg"

          }
        })
          .then((response) => {
            expect(response).property('status').to.equal(200)
            cy.wrap(response.body.result.dynamic_id).should('equal', createdId)
          })
      })

  })

  it('try to create item without item_model_id', () => {
    cy.request({
      url: 'http://localhost:3000/item/',
      method: 'POST',
      failOnStatusCode: false,
      body: {
        "serial_number": "12345",
        "photo": "/",
        "description": "",
        "status": "aktiv",
        "item_type_id": 1,
      },
      headers: {
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGVtYWlsLmNvbSIsImlhdCI6MTY0MjQ0OTE2NCwiZXhwIjoxNjQzMDQ5MTY0fQ.psgtoANRSA__w_I8s1GeG1szvgthobPl-46y7lr-MEg"

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
      url: 'http://localhost:3000/item/',
      method: 'POST',
      body: {
        "serial_number": "12345",
        "photo": "/",
        "description": "test",
        "status": "aktiv",
        "item_model_id": 1,
        "item_type_id": 1,
      },
      headers: {
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGVtYWlsLmNvbSIsImlhdCI6MTY0MjQ0OTE2NCwiZXhwIjoxNjQzMDQ5MTY0fQ.psgtoANRSA__w_I8s1GeG1szvgthobPl-46y7lr-MEg"

      }
    })
      .then((response) => {
        expect(response).property('status').to.equal(200)
        cy.wrap(response.body.result.id).should('not.be.empty')
        let createdId = response.body.result.id;
        cy.request({
          url: 'http://localhost:3000/item/' + createdId,
          method: 'DELETE',
          headers: {
            Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGVtYWlsLmNvbSIsImlhdCI6MTY0MjQ0OTE2NCwiZXhwIjoxNjQzMDQ5MTY0fQ.psgtoANRSA__w_I8s1GeG1szvgthobPl-46y7lr-MEg"

          }
        })
          .then((response) => {
            expect(response).property('status').to.equal(200)
            cy.wrap(response.body.result).should('equal', createdId)
          })
      })

  })

  it('Edit 1 Attribute from newly created item', () => {
    let itemId;
    cy.request({
      url: 'http://localhost:3000/item/',
      method: 'POST',
      headers: {
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGVtYWlsLmNvbSIsImlhdCI6MTY0MjQ0OTE2NCwiZXhwIjoxNjQzMDQ5MTY0fQ.psgtoANRSA__w_I8s1GeG1szvgthobPl-46y7lr-MEg"

      },
      body: {
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
        cy.wrap(response.body.result.id).should('not.be.empty')
        itemId = response.body.result.id;
        cy.request({
          url: 'http://localhost:3000/item/' + itemId,
          method: 'PUT',
          headers: {
            Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGVtYWlsLmNvbSIsImlhdCI6MTY0MjQ0OTE2NCwiZXhwIjoxNjQzMDQ5MTY0fQ.psgtoANRSA__w_I8s1GeG1szvgthobPl-46y7lr-MEg"

          },
          body: {
            "serial_number": "123456",
          }
        })
          .then((response) => {
            expect(response).property('status').to.equal(200)
          })
      }).then(() => {
      cy.request({
        url: 'http://localhost:3000/item/' + itemId,
        method: 'GET',
        headers: {
          Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGVtYWlsLmNvbSIsImlhdCI6MTY0MjQ0OTE2NCwiZXhwIjoxNjQzMDQ5MTY0fQ.psgtoANRSA__w_I8s1GeG1szvgthobPl-46y7lr-MEg"

        }
      }).should((response) => {
        expect(response).property('status').to.equal(200)
        expect(response.body.result).property('serial_number').to.equal('123456');
      })
    })
  })

  it('Edit multiple Attributes from newly created item', () => {
    let itemId;
    cy.request({
      url: 'http://localhost:3000/item/',
      method: 'POST',
      headers: {
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGVtYWlsLmNvbSIsImlhdCI6MTY0MjQ0OTE2NCwiZXhwIjoxNjQzMDQ5MTY0fQ.psgtoANRSA__w_I8s1GeG1szvgthobPl-46y7lr-MEg"

      },
      body: {
        "serial_number": "12345",
        "photo": "/",
        "status": "aktiv",
        "item_model_id": 1,
        "item_type_id": 1,
      }
    })
      .then((response) => {
        expect(response).property('status').to.equal(200)
        cy.wrap(response.body.result.id).should('not.be.empty')
        itemId = response.body.result.id;
        cy.request({
          url: 'http://localhost:3000/item/' + itemId,
          method: 'PUT',
          headers: {
            Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGVtYWlsLmNvbSIsImlhdCI6MTY0MjQ0OTE2NCwiZXhwIjoxNjQzMDQ5MTY0fQ.psgtoANRSA__w_I8s1GeG1szvgthobPl-46y7lr-MEg"

          },
          body: {
            "serial_number": "123456",
            "photo": "Blank",
          }
        })
          .then((response) => {
            expect(response).property('status').to.equal(200)
          })
      }).then(() => {
      cy.request({
        url: 'http://localhost:3000/item/' + itemId,
        method: 'GET',
        headers: {
          Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGVtYWlsLmNvbSIsImlhdCI6MTY0MjQ0OTE2NCwiZXhwIjoxNjQzMDQ5MTY0fQ.psgtoANRSA__w_I8s1GeG1szvgthobPl-46y7lr-MEg"

        }
      }).should((response) => {
        expect(response).property('status').to.equal(200)
        expect(response.body.result).property('serial_number').to.equal('123456');
        expect(response.body.result).property('photo').to.equal('Blank');
      })
    })

  })

  it('Edit foreign Key Attribute', () => {
    let itemId;
    cy.request({
      url: 'http://localhost:3000/item/',
      method: 'POST',
      body: {
        "serial_number": "12345",
        "photo": "/",
        "status": "aktiv",
        "item_model_id": 1,
        "item_type_id": 1,
      },
      headers: {
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGVtYWlsLmNvbSIsImlhdCI6MTY0MjQ0OTE2NCwiZXhwIjoxNjQzMDQ5MTY0fQ.psgtoANRSA__w_I8s1GeG1szvgthobPl-46y7lr-MEg"

      }
    })
      .then((response) => {
        expect(response).property('status').to.equal(200)
        cy.wrap(response.body.result.id).should('not.be.empty')
        itemId = response.body.result.id;
        cy.request({
          url: 'http://localhost:3000/item/' + itemId,
          method: 'PUT',
          body: {
            "item_model_id": 2,
          },
          headers: {
            Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGVtYWlsLmNvbSIsImlhdCI6MTY0MjQ0OTE2NCwiZXhwIjoxNjQzMDQ5MTY0fQ.psgtoANRSA__w_I8s1GeG1szvgthobPl-46y7lr-MEg"

          }
        })
          .then((response) => {
            expect(response).property('status').to.equal(200)
            cy.request({
              url: 'http://localhost:3000/item/' + itemId,
              method: 'GET',
              headers: {
                Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGVtYWlsLmNvbSIsImlhdCI6MTY0MjQ0OTE2NCwiZXhwIjoxNjQzMDQ5MTY0fQ.psgtoANRSA__w_I8s1GeG1szvgthobPl-46y7lr-MEg"

              }
            }).should((response) => {
              expect(response).property('status').to.equal(200)
              expect(response.body.result).property('item_model_id').to.equal(2);
              expect(response.body.result).property('item_type_description').to.equal('Elektroschockpistole');
            })
          })
      })

  })

})
