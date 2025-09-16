const { Schema, modle } = require("mongoose");

const userSchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: {
      type: String,
      required: true,
      default:
        "https://res.cloudinary.com/dp1o87p4c/image/upload/v1758036172/image_kwaqp4.png",
    },
    bio: { type: String, default: "no bio yet" },
    followers: [{ types: Schema.Types.ObjectId, ref: "User" }],
    followers: [{ types: Schema.Types.ObjectId, ref: "User" }],
    bookmark: [{ types: Schema.Types.ObjectId, ref: "Post" }],
    posts: [{ types: Schema.Types.ObjectId, ref: "Post" }],
  },
  { timestamps: true }
);

module.exports = module("User", userSchema);
