import mongoose from "mongoose"

const Schema = mongoose.Schema

const commentSchema = new Schema({
  text: {
    type: String,
    //set max chars
  },
  author: {
    type: String
  },
  date: {
    type: Date,
  },
}, {
  timestamps: true, 
})

const dogSchema = new Schema({
  name: String,
  approach: {
    type: String,
    required: true,
    enum: ['approach freely', 'approach with caution', 'do not approach']
  },
  leash: Boolean,
  location: String,
  master: String,
  lost: Boolean,
  command: String,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  comments: [commentSchema],
}, {
  timestamps: true,
})

const Dog = mongoose.model("Dog", dogSchema)

export {
  Dog
}