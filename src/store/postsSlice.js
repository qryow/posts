import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = 'https://jsonplaceholder.typicode.com';

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async () => {
    const res = await axios.get(`${API}/posts`);
    return res.data;
});

export const getAuthors = createAsyncThunk(
  'user/getAuthors',
  async () => {
    const res = await axios.get(`${API}/users`);
    return res.data;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    authors: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [getPosts.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    },
    [getPosts.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
    [getAuthors.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [getAuthors.fulfilled]: (state, action) => {
      state.authors = action.payload;
      state.loading = false;
    },
    [getAuthors.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
  },
});

export default postsSlice.reducer;
