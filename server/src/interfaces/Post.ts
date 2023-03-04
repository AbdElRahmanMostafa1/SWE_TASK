import mongoose from "mongoose";

interface Post extends mongoose.Document {
  imageUrl: string;
  caption: string;
}

export default Post;
