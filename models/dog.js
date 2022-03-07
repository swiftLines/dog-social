import mongoose from "mongoose"

const Schema = mongoose.Schema

const dogSchema = new Schema({
  name: String,
  approach: {
    type: String,
    required: true,
    enum: ['approach freely', 'approach with caution', 'do not approach']
  },
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