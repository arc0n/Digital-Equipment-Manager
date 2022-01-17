/// <reference types="cypress" />

describe('loginscreen', () => {
  beforeEach(() => {
    cy.clearLocalStorage()
    indexedDB.deleteDatabase('_ionicstorage')
    cy.visit('http://localhost:3000/')
  })
  it('auth page should be visible', () => {
  cy.get('app-auth')
  })
  it('Login Button should navigate to Equipment Dashboard', () => {
    cy.get('input').eq(0).type('admin@email.com')
    cy.get('input').eq(1).type('admin')
    cy.get('[cy-data="login-button"]').click()
    cy.get('equipment-dashboard')
  })

  it('Equipment Dashboard GUI', () => {
    cy.get('input').eq(0).type('admin@email.com')
    cy.get('input').eq(1).type('admin')
    cy.get('[cy-data="login-button"]').click();
    cy.get('equipment-dashboard')
    cy.contains('Bitte ID-Code unterhalb eingeben oder mittels "SCAN" button scannen. Kamera für scan benötigt.')
    cy.contains('Home')
    cy.contains('Mitarbeiter anlegen')
    cy.contains('Gegenstand anlegen')
    cy.contains('Geräteliste')
  })

  it('Basic Navigation', () => {
    cy.get('input').eq(0).type('admin@email.com')
    cy.get('input').eq(1).type('admin')
    cy.get('[cy-data="login-button"]').click()
    cy.get('[ng-reflect-router-link="/employee-add-page"]').click()
    cy.contains('Postleitzahl')
    cy.get('[ng-reflect-router-link="/equipment-add-page"]').click()
    cy.contains('Seriennummer')
    cy.get('[ng-reflect-router-link="/item-list"]').click()
    cy.contains('Model')
    cy.get('[ng-reflect-router-link="/tabs/dashboard"]').click()
    cy.contains('Bitte ID-Code unterhalb eingeben oder mittels "SCAN" button scannen. Kamera für scan benötigt.')
  })



})
