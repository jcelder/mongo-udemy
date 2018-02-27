import mongoose, { Schema } from 'mongoose'

const UserSchema = new Schema({
  name: String,
  postCount: Number,
})

const User = mongoose.model('user', UserSchema)

export default User
