/* eslint-env node, mocha */

import { expect } from 'chai'
import User from '../src/user'

describe('Validating User records', () => {
  it('requires a user name', () => {
    const user = new User({ name: undefined })
    const validationResult = user.validateSync()
    const { message } = validationResult.errors.name
    expect(message).to.equal('Name is required.')
  })
  it('requires a user name to be at least 3 characters long', () => {
    const user = new User({ name: 'Jo' })
    const validationResult = user.validateSync()
    const { message } = validationResult.errors.name
    expect(message).to.equal('Name must be at least 3 characters long')
  })
  it('disallows invalid records from being saved', () => {
    const user = new User({ name: 'Jo' })
    return user.save()
      .catch((validationResult) => {
        const { message } = validationResult.errors.name
        expect(message).to.equal('Name must be at least 3 characters long')
      })
  })
})