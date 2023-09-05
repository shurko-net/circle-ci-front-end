import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import aboutSlice from './slices/aboutSlice';
import postSlice from './slices/postSlice';
import authSlice from './slices/authSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    about: aboutSlice,
    post: postSlice,
    auth: authSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
