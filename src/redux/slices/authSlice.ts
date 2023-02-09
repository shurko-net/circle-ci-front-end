import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    idUser: 0,
    name: null,
    surname: null,
    email: null,
    password: null,
    tNumber: null,
    biography: null,
    subscribed: 0,
    isAuth: true,
    isLogged: false,
  },
  reducers: {
    login(state, action) {
      state.name = action.payload.name;
      state.idUser = action.payload.idUser;
      state.surname = action.payload.surname;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.tNumber = action.payload.tNumber;
      state.biography = action.payload.biography;
      state.subscribed = action.payload.subscribed;
      state.isAuth = action.payload.isAuth;
      state.isLogged = true;
    },
  },
});

export default authSlice.reducer;
export const { login } = authSlice.actions;
