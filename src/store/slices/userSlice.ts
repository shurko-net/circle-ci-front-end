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
      state.isLogged = true;
      state.biography = action.payload?.biography ?? '';
      state.phoneNumber = action.payload?.phoneNumber ?? '';
      state.subscribed = action.payload?.subscribed ?? '';
      localStorage.setItem('email', action.payload.email);
      localStorage.setItem('password', action.payload.password);
      localStorage.setItem('firstName', action.payload.firstName);
      localStorage.setItem('secondName', action.payload.secondName);
      localStorage.setItem('biography', action.payload?.biography ?? '');
      localStorage.setItem('phoneNumber', action.payload?.phoneNumber ?? '');
      localStorage.setItem('subscribed', action.payload?.subscribed ?? '');
    },
    userSignOut(state) {
      localStorage.clear();
      state.firstName = '';
      state.secondName = '';
      state.email = '';
      state.password = '';
      state.isLogged = false;
      state.biography = '';
      state.phoneNumber = '';
      state.subscribed = '';
    },
  },
});

export const { userAuth, userSignOut } = userSlice.actions;

export default userSlice.reducer;
