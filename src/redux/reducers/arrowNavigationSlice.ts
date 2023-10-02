import { createSlice } from '@reduxjs/toolkit';

const initialState: {
  arrowDirection: string;
  postInView: number;
} = {
  arrowDirection: '',
  postInView: 0,
};

export const arrowNavigationSlice = createSlice({
  name: 'arrowNavigation',
  initialState,
  reducers: {
    changePostInView: (state, action) => {
      state.postInView = action.payload;
    },
  },
});

export const { changePostInView } = arrowNavigationSlice.actions;
export default arrowNavigationSlice.reducer;
