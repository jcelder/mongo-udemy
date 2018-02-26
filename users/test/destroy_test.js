/* eslint-env node, mocha */

import { expect } from 'chai'
import User from '../src/user'

describe('Deleting a user', () => {
  let josh

  beforeEach(async () => {
    josh = new User({ name: 'Josh' })
    await josh.save()
  })

  it('Model Instance: Remove', async () => {
    await josh.remove()
    const user = await User.findOne({ name: 'Josh' })
    expect(user).to.equal(null)
  })

  it('Class Method: remove', async () => {
    // Remove records that match given criteria
    await User.remove({ name: 'Josh' })
    const user = await User.findOne({ name: 'Josh' })
    expect(user).to.equal(null)
  })

  it('Class Method: findOneAndRemove', async () => {
    await User.findOneAndRemove({ name: 'Josh' })
    const user = await User.findOne({ name: 'Josh' })
    expect(user).to.equal(null)
  })

  it('Class Method: findByIdAndRemove', async () => {
    await User.findByIdAndRemove(josh._id)
    const user = await User.findOne({ name: 'Josh' })
    expect(user).to.equal(null)
  })
})
