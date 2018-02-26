/* eslint-env node, mocha */
import { expect } from 'chai'
import User from '../src/user'

describe('Creating records', () => {
  it('saves a user', async () => {
    const josh = new User({ name: 'Josh' })
    await josh.save()
    expect(josh.isNew).to.equal(false)
  })
})
