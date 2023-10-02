import { createSlice } from '@reduxjs/toolkit';
import { IPostsState } from '../../types/Post';
import { fetchPosts, fetchPostsByTag } from '../actions/thunks';

const initialState: IPostsState = {
  type: '',
  posts: [],
  loading: false,
  error: undefined,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.length === 0) {
          state.posts = [];
        } else {
          const uniquePosts = action.payload.filter((newPost) => {
            return !state.posts.some(
              (existingPost) => existingPost.id === newPost.id
            );
          });
          state.posts = [...state.posts, ...uniquePosts];
          state.type = 'post';
        }
      }),
      builder.addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      }),
      builder.addCase(fetchPostsByTag.pending, (state) => {
        state.loading = true;
      }),
      builder.addCase(fetchPostsByTag.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
        state.type = 'tag';
      }),
      builder.addCase(fetchPostsByTag.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;
