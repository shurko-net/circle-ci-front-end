import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import AuthService from '../../services/AuthService';
import { BASE_URL } from '../../http';
import { IUser } from '../../models/IUser';
import { AuthResponse } from '../../models/responce/AuthResponse';
// import { setUser } from './userSlice';

export const registration = createAsyncThunk<IUser, {
  name: string,
  surname:string,
  email: string,
  password: string
}, { rejectValue : string }>(
  'auth/registration',
  async ({
    email, password, name, surname,
  }, { rejectWithValue }) => {
    const response = await AuthService.registration(email, password, name, surname);
    console.log(response);
    if (response.status !== 200) {
      return rejectWithValue('Err');
    }
    localStorage.setItem('token', response.data.accessToken);
    return response.data.user;
  },
);

export const login = createAsyncThunk<IUser,
{ email: string, password: string },
{ rejectValue : string }>(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    const response = await AuthService.login(email, password);
    console.log(response);
    if (response.status !== 200) {
      return rejectWithValue('Err');
    }
    localStorage.setItem('token', response.data.accessToken);
    return response.data.user;
  },
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    const response = await AuthService.logout();
    if (response.status !== 200) {
      return rejectWithValue('Err');
    }
    localStorage.removeItem('token');
  },
);

export const checkAuth = createAsyncThunk(
  'auth/checkAuth',
  async (_, { rejectWithValue }) => {
    const response = await axios.get<AuthResponse>(`${BASE_URL}/auth/refresh`, { withCredentials: true });
    if (response.status !== 200) {
      console.log(response.status);
      return rejectWithValue('Err');
    }
    console.log(response);
    localStorage.setItem('token', response.data.accessToken);
    return response.data.user;
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {} as IUser,
    isAuth: false,
    isLoading: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(registration.fulfilled, (state, action) => {
        state.isAuth = true;
        state.user = action.payload;
      })
      .addCase(registration.rejected, (state) => {
        state.isAuth = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isAuth = true;
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.rejected, (state) => {
        state.isAuth = false;
        state.user = {} as IUser;
        state.isLoading = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isAuth = false;
        state.user = {} as IUser;
        state.isLoading = false;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkAuth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isAuth = true;
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.isAuth = false;
        state.user = {} as IUser;
        state.isLoading = false;
        localStorage.removeItem('token');
      });
  },
});

export default authSlice.reducer;
