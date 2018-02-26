/* eslint-env node, mocha */

import { expect } from 'chai'
import User from '../src/user'

describe('Reading users out of the database', () => {
  let josh

  beforeEach(async () => {
    josh = new User({ name: 'Josh' })
    await josh.save()
  })
  it('finds all users with a name of Josh', async () => {
    const users = await User.find({ name: 'Josh' })
    expect(users[0]._id).to.deep.equal(josh._id)
  })
  it('finds a user with a particular id', async () => {
    const user = await User.findOne({ _id: josh._id })
    expect(user.name).to.equal('Josh')
  })
})
