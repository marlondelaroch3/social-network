import { createSlice } from '@reduxjs/toolkit';
import { fetchTags } from '../actions/thunks';
import { ITagsState } from '../../types/Tag';

const initialState: ITagsState = {
  tags: [],
  loading: false,
  error: undefined,
};

export const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTags.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(fetchTags.fulfilled, (state, action) => {
        state.loading = false;
        state.tags = action.payload;
      }),
      builder.addCase(fetchTags.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default tagsSlice.reducer;
