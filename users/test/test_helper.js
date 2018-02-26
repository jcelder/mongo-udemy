/* eslint-env node, mocha */
import mongoose from 'mongoose'

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
  await mongoose.connection.dropCollection('users')
})
