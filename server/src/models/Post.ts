import mongoose, { Schema } from "mongoose";
import { Post } from "../interfaces";

const postSchema = new Schema(
  {
    imageUrl: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    caption: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model<Post>("Post", postSchema);

export default Post;
