import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getPosts,
  addPost,
  deletePost,
  editPost,
  likePost,
} from "../asyncThunk/";

const initialState = { posts: [], isLoading: false };

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.posts;
    },
    [getPosts.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action.payload.data.errors[0]);
    },
    [addPost.pending]: (state) => {
      state.isLoading = true;
    },
    [addPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.posts;
    },
    [addPost.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action.payload.data.errors[0]);
    },
    [deletePost.pending]: (state) => {
      state.isLoading = true;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.posts;
    },
    [deletePost.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action.payload.data.errors[0]);
    },
    [editPost.pending]: (state) => {
      state.isLoading = true;
    },
    [editPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.posts;
    },
    [editPost.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action.payload.data.errors[0]);
    },
    [likePost.pending]: (state) => {
      state.isLikeLoading = true;
    },
    [likePost.fulfilled]: (state, action) => {
      state.isLikeLoading = false;
      state.posts = action.payload.data.posts;
    },
    [likePost.rejected]: (state, action) => {
      state.isLikeLoading = false;
      console.error(action.payload.data.errors[0]);
    },
  },
});

export const { reducer: postsReducer } = postsSlice;
