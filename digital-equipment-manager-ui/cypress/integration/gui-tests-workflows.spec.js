/// <reference types="cypress" />

describe('loginscreen', () => {
  beforeEach(() => {
    cy.clearLocalStorage()
    indexedDB.deleteDatabase('_ionicstorage')
    cy.visit('http://localhost:3000/')
  })

  it('Create Employee', () => {
    cy.get('input').eq(0).type('admin@email.com')
    cy.get('input').eq(1).type('admin')
    cy.get('[cy-data="login-button"]').click({position: 'center'})
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
    cy.get('input').eq(0).type('admin@email.com')
    cy.get('input').eq(1).type('admin')
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

  it.skip('Gerät ausgeben', () => {

    cy.intercept('**/person?name=Friedrich%20Fellner').as('apiperson')
    cy.get('input').eq(0).type('admin@email.com')
    cy.get('input').eq(1).type('admin')
    cy.get('[cy-data="login-button"]').click({position: 'center'})
    cy.get('[ng-reflect-router-link="/item-list"]').click()
    cy.contains('Schlagstock').click()
    cy.contains('Status: aktiv, verfügbar')
    cy.get('[cy-data="equ-action"]').click()
    cy.get('[cy-data="QR-Code"]').type('Friedrich Fellner')
    cy.wait('@apiperson')
    cy.get('[cy-data="person-result"]').first().click()
    cy.get('[cy-data="Btn-Confirm"]').click()
    cy.get('[ng-reflect-router-link="/item-list"]').click()
    cy.wait(500)
    cy.contains('Schlagstock').click()
    cy.contains('Status: aktiv, ausgegeben')

  })

  it.skip('Gerät retournieren', () => {
    cy.get('input').eq(0).type('admin@email.com')
    cy.get('input').eq(1).type('admin')
    cy.get('[cy-data="login-button"]').click()
    cy.get('[ng-reflect-router-link="/item-list"]').click()
    cy.contains('Schlagstock').click()
    cy.contains('Status: aktiv, ausgegeben')
    cy.get('[cy-data="equ-action"]').click()
    cy.get('[cy-data="Btn-Confirm"]').click()
    cy.get('[ng-reflect-router-link="/item-list"]').click()
    cy.wait(500)
    cy.contains('Schlagstock').click()
    cy.contains('Status: aktiv, verfügbar')

  })
})
