import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'User',
  initialState: {
    firstName: '',
    secondName: '',
    password: '',
    email: '',
    biography: '',
    phoneNumber: '',
    subscribed: '',
    isLogged: false,
  },
  reducers: {
    userAuth(state, action) {
      state.firstName = action.payload.firstName;
      state.secondName = action.payload.secondName;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.biography = action.payload?.biography ?? '';
      state.phoneNumber = action.payload?.phoneNumber ?? '';
      state.subscribed = action.payload?.subscribed ?? '';
      state.isLogged = true;
      localStorage.setItem('email', action.payload.email);
      localStorage.setItem('password', action.payload.password);
    },
    userSignOut(state) {
      localStorage.clear();
      state.firstName = '';
      state.secondName = '';
      state.email = '';
      state.password = '';
      state.biography = '';
      state.phoneNumber = '';
      state.subscribed = '';
      state.isLogged = false;
    },
  },
});

export const { userAuth, userSignOut } = userSlice.actions;

export default userSlice.reducer;
