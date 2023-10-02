import { configureStore } from '@reduxjs/toolkit';
import postsSlice from '../reducers/postsSlice';
import { useDispatch } from 'react-redux';
import arrowNavigationSlice from '../reducers/arrowNavigationSlice';
import tagsSlice from '../reducers/tagsSlice';
const store = configureStore({
  reducer: {
    posts: postsSlice,
    arrowNavigation: arrowNavigationSlice,
    tags: tagsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
