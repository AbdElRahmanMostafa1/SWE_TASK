import { createSlice } from "@reduxjs/toolkit";
import { addPost, getPosts } from "../actions/post";

// TODO fix any type
const initialState: any = {
  isLoading: false,
  allPosts: [],
  isSuccessful: false,
  error: null,
};

const post = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add Post
    builder.addCase(addPost.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(addPost.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.allPosts = state.allPosts.push(payload);
      state.isSuccessful = true;
    });
    builder.addCase(addPost.rejected, (state, { payload }: any) => {
      state.isLoading = false;
      state.error = payload;
      state.isSuccessful = false;
    });

    // Get Posts
    builder.addCase(getPosts.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(getPosts.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.allPosts.push(...payload);
      state.isSuccessful = true;
    });
    builder.addCase(getPosts.rejected, (state, { payload }: any) => {
      state.isLoading = false;
      state.error = payload;
      state.isSuccessful = false;
    });
  },
});

export default post.reducer;
