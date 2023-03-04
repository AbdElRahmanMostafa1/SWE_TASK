import { createAsyncThunk } from "@reduxjs/toolkit";
import apiCall from "../../api/apiCall";

const addPost = createAsyncThunk(
  "post/addPost",
  async (payload: FormData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await apiCall("post", "img/upload", payload);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

const getPosts = createAsyncThunk(
  "post/getPosts",
  async (page: number, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await apiCall("get", `img/list?page=${page}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export { addPost, getPosts };
