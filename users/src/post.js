import mongoose, { Schema } from 'mongoose'

const PostSchema = new Schema({
  title: String,
})

export default PostSchema
