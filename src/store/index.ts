import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import aboutSlice from './slices/aboutSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    about: aboutSlice,
  },
});
