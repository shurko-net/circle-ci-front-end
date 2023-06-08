import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import AuthService from '../../services/AuthService';
import { BASE_URL } from '../../http';
import { IUser } from '../../models/IUser';
import { AuthResponse } from '../../models/responce/AuthResponse';

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
    if (!response.status) {
      return rejectWithValue('Err');
    }
    console.log(response);
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
    if (!response.status) {
      return rejectWithValue('Err');
    }
    localStorage.setItem('token', response.data.accessToken);
    return response.data.user;
  },
);

export const logout = createAsyncThunk<string, undefined, { rejectValue: string }>(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await AuthService.logout();
      localStorage.removeItem('token');
      // dispatch(setAuth(false));
      // dispatch(setUser({} as IUser));
      return 'Success';
    } catch (e: any) {
      return rejectWithValue('Err');
    }
  },
);

export const checkAuth = createAsyncThunk(
  'auth/checkAuth',
  async (_, { rejectWithValue }) => {
    const response = await axios.get<AuthResponse>(`${BASE_URL}auth/refresh`, { withCredentials: true });
    if (!response.status) {
      return rejectWithValue('Err');
    }
    localStorage.setItem('token', response.data.accessToken);
    // dispatch(setAuth(true));
    // dispatch(setUser({
    //   name: response.data.name,
    //   email: response.data.email,
    //   surname: response.data.surname,
    //   id: response.data.id,
    // }));
    return response.data.user;
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {} as IUser,
    isAuth: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(registration.fulfilled, (state, action) => {
        state.isAuth = true;
        state.user = action.payload;
        debugger;
      })
      .addCase(registration.rejected, (state) => {
        state.isAuth = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isAuth = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.isAuth = false;
        state.user = {} as IUser;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isAuth = false;
        state.user = {} as IUser;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isAuth = true;
        state.user = action.payload;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.isAuth = false;
        state.user = {} as IUser;
      });
  },
});

export default authSlice.reducer;
