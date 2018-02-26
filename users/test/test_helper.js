/* eslint-env node, mocha */
import mongoose from 'mongoose'

before(() => {
  const connString = 'mongodb://localhost/users_test'

  mongoose.connect(connString)
  mongoose.connection
    .once('open', () => console.log(`Connection successful to ${connString}!`))
    .on('error', (error) => {
      console.error('Error:', error)
    })
})
