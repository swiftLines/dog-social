import mongoose from "mongoose"

const Schema = mongoose.Schema

const commentSchema = new Schema({
  text: {
    type: String,
    maxlength: 30
  },
  date: {
    type: Date,
  },
  author: {
    type: Schema.Types.ObjectId, 
    ref: "Profile"},
}, {
  timestamps: true, 
})

const dogSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20
  },
  approach: {
    type: String,
    required: true,
    enum: ['approach freely', 'approach with caution', 'do not approach']
  },
  leash: Boolean,
  location: String,
  lost: Boolean,
  command: {
    type: String,
    maxlength: 15
  },
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  comments: [commentSchema],
}, {
  timestamps: true,
})

const Dog = mongoose.model("Dog", dogSchema)

export {
  Dog
}