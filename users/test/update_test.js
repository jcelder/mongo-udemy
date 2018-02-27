/* eslint-env node, mocha */

import { expect } from 'chai'
import User from '../src/user'

describe('Updating a user record', () => {
  let josh

  beforeEach(async () => {
    josh = new User({ name: 'Josh', postCount: 0 })
    await josh.save()
  })

  it('Model Instance: Set and Save', async () => {
    // Set and save allows us to possibly update multiple properties on a document and then save
    josh.set('name', 'Jon')
    await josh.save()
    const users = await User.find({})
    expect(users.length).to.equal(1)
    expect(users[0].name).to.equal('Jon')
  })

  it('Model Instance: Update', async () => {
    await josh.update({ name: 'Jon' })
    const users = await User.find({})
    expect(users.length).to.equal(1)
    expect(users[0].name).to.equal('Jon')
  })

  it('Model Class: Update', async () => {
    await User.update({ name: 'Josh' }, { name: 'Jon' })
    const users = await User.find({})
    expect(users.length).to.equal(1)
    expect(users[0].name).to.equal('Jon')
  })

  it('Model Class: findOneAndUpdate', async () => {
    await User.findOneAndUpdate({ name: 'Josh' }, { name: 'Jon' })
    const users = await User.find({})
    expect(users.length).to.equal(1)
    expect(users[0].name).to.equal('Jon')
  })

  it('Model Class: findByIdAndUpdate', async () => {
    await User.findByIdAndUpdate(josh._id, { name: 'Jon' })
    const users = await User.find({})
    expect(users.length).to.equal(1)
    expect(users[0].name).to.equal('Jon')
  })

  it('A user can have their post count incremented by 1', async () => {
    await User.update({ name: 'Josh' }, { $inc: { postCount: 1 } })
    const users = await User.find({})
    expect(users[0].postCount).to.equal(1)
  })
})
