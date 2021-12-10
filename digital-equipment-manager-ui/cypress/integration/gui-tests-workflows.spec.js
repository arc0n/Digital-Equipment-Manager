/// <reference types="cypress" />

describe('loginscreen', () => {
  beforeEach(() => {
    cy.clearLocalStorage()
    indexedDB.deleteDatabase('_ionicstorage')
    cy.visit('http://localhost:4200/')
  })

  it('Create Employee', () => {
    cy.get('[cy-data="login-button"]').click()
    cy.get('[ng-reflect-router-link="/employee-add-page"]').click()
    cy.get('[formcontrolname="personFirstname"]').type('Max')
    cy.get('[formcontrolname="personLastname"]').type('Mustermann')
    cy.get('[formcontrolname="personBirthdate"]').type('1990-07-25')
    cy.get('[formcontrolname="personSex"]').click()
    cy.get(':nth-child(2) > .in-item').click()
    //Das Dropdownmenü muss sich erst schließen
    cy.wait(500)
    cy.get('[formcontrolname="addressStreet"]').type('Hochstädtplatz')
    cy.wait(200)
    cy.get('[formcontrolname="addressZip"]').type('1200')
    cy.get('[formcontrolname="addressCity"]').type('Wien')
    cy.get('[type="submit"]').click()
  })

  it.skip('Create Item', () => {

    cy.get('[cy-data="login-button"]').click()
    cy.get('[ng-reflect-router-link="/equipment-add-page"]').click()
    cy.get('[formcontrolname="itemType"]').click()
    cy.get('ion-select-option').first().click()
    cy.get('[cy-data="model-dropdown"]').click()
    cy.get('[cy-data="model-test"]').click()
    cy.get('[formcontrolname="itemSN"]').type('123456789')
    cy.get('[formcontrolname="itemComment"]').type('CypressTest')
    cy.get('[type="submit"]').click()

  })

  it('Gerät ausgeben', () => {

    cy.intercept('**/person?name=Friedrich%20Fellner').as('apiperson')

    cy.get('[cy-data="login-button"]').click()
    cy.get('[ng-reflect-router-link="/item-list"]').click()
    cy.contains('4z8k9a6bqx7u7ad').click()
    cy.contains('Status: aktiv, verfügbar')
    cy.get('[cy-data="equ-action"]').click()
    cy.get('[cy-data="QR-Code"]').type('Friedrich Fellner')
    cy.wait('@apiperson')
    cy.get('[cy-data="person-result"]').first().click()
    cy.get('[cy-data="Btn-Confirm"]').click()
    cy.get('[ng-reflect-router-link="/item-list"]').click()
    cy.wait(500)
    cy.contains('4z8k9a6bqx7u7ad').click()
    cy.contains('Status: aktiv, ausgegeben')

  })

  it('Gerät retournieren', () => {

    cy.get('[cy-data="login-button"]').click()
    cy.get('[ng-reflect-router-link="/item-list"]').click()
    cy.contains('4z8k9a6bqx7u7ad').click()
    cy.contains('Status: aktiv, ausgegeben')
    cy.get('[cy-data="equ-action"]').click()
    cy.get('[cy-data="Btn-Confirm"]').click()
    cy.get('[ng-reflect-router-link="/item-list"]').click()
    cy.wait(500)
    cy.contains('4z8k9a6bqx7u7ad').click()
    cy.contains('Status: aktiv, verfügbar')

  })
})
