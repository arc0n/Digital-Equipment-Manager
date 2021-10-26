/// <reference types="cypress" />

describe('loginscreen', () => {
  beforeEach(() => {
    cy.clearLocalStorage()
    indexedDB.deleteDatabase('_ionicstorage')
    cy.visit('http://localhost:4200/')
  })
  it('auth page should be visible', () => {
  cy.get('app-auth')
  })
  it('Login Button should navigate to Equipment Dashboard', () => {
    cy.get('[cy-data="login-button"]').click()
    cy.get('equipment-dashboard')
  })
})
