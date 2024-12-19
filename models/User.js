// import mongoose from "mongoose"

// const userSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     image: { type: String, required: true },
//   },
//   { timestamps: true }
// )

// export default mongoose.models.User || mongoose.model("User", userSchema)

import mongoose, { Schema } from "mongoose"

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
    },
    username: {
      type: String,
      required: [true, "Username is required"],
    },
    image: String,
    bookmarks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Property",
      },
    ],
  },
  {
    timestamps: true,
  }
)

const User = mongoose.models.User || mongoose.model("User", UserSchema)

export default User
