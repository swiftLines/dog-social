import mongoose from "mongoose"

const Schema = mongoose.Schema

const dogSchema = new Schema({
  name: String,
  approach: String,
  lost: Boolean,
  command: String,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
  // comments: [commentSchema],
}, {
  timestamps: true,
})

const Dog = mongoose.model("Dog", dogSchema)

export {
  Dog
}