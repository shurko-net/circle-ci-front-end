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
    await AuthService.logout();
    return rejectWithValue('Err');
  },
);

export const checkAuth = createAsyncThunk(
  'auth/checkAuth',
  async (_, { rejectWithValue }) => {
    const response = await axios.get<AuthResponse>(`${BASE_URL}/auth/refresh`, { withCredentials: true });

    if (response.status !== 200) {
      return rejectWithValue('Err');
    }
    localStorage.setItem('token', response.data.accessToken);
    return response.data.user;
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      id: 0,
      name: '',
      surname: '',
      profileImageUrl: '',
      backgroundImageUrl: '',
      biography: '',
      followersAmount: 0,
      commentsAmount: 0,
      postsAmount: 0,
      isMyself: false,
      isFollowed: false,
    } as IUser,
    isAuth: false,
    isLoading: true,
  },
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setUser(state, action) {
      state.user.id = action.payload.id;
      state.user.name = action.payload.name;
      state.user.surname = action.payload.surname;
      state.user.biography = action.payload.biography;
      state.user.backgroundImageUrl = action.payload.backgroundImageUrl;
      state.user.profileImageUrl = action.payload.profileImageUrl;
      state.user.followersAmount = action.payload.followersAmount;
      state.user.commentsAmount = action.payload.commentsAmount;
      state.user.postsAmount = action.payload.postsAmount;
      state.user.isMyself = action.payload.isMyself;
      state.user.isFollowed = action.payload.isFollowed;
    },
  },
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
      .addCase(logout.rejected, (state) => {
        state.isAuth = false;
        state.user = {} as IUser;
        state.isLoading = false;
        localStorage.removeItem('token');
        window.location.reload();
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

export const {
  setIsLoading,
} = authSlice.actions;

export default authSlice.reducer;
