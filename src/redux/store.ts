import { configureStore, combineReducers } from '@reduxjs/toolkit';

import authSlice from './slices/authSlice';

const rootReducer = combineReducers({
  auth: authSlice,

});

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch; // useDispatch hook typing
export type RootState = ReturnType<typeof store.getState>;// useSelector hook typing

export default store;
