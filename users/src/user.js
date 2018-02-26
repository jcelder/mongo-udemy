import mongoose, { Schema } from 'mongoose'

const UserSchema = new Schema({
  name: String,
})

const User = mongoose.model('user', UserSchema)

export default User
