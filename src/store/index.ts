import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import aboutSlice from './slices/aboutSlice';
import postSlice from './slices/postSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    about: aboutSlice,
    post: postSlice,
  },
});
