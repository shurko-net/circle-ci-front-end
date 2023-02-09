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
    },
  },
});

export const { userAuth } = userSlice.actions;

export default userSlice.reducer;
