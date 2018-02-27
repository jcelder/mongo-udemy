/* eslint-env node, mocha */
import mongoose from 'mongoose'

mongoose.Promise = global.Promise

before(async () => {
  const connString = 'mongodb://localhost/users_test'

  mongoose.connect(connString)
  await mongoose.connection
    .once('open', () => console.log(`Connection successful to ${connString}!`))
    .on('error', (error) => {
      console.error('Error:', error)
    })
})

beforeEach(async () => {
  try {
    await mongoose.connection.dropCollection('users')
  } catch (e) {
    if (e.message !== 'ns not found') {
      throw e
    }
  }
})
