import mongoose, { Schema } from 'mongoose'

const CommentSchema = new Schema({
  content: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
})

const Comment = mongoose.model('comment', CommentSchema)

export default Comment