import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'User',
  initialState: {
    firstName: null,
    secondName: null,
    password: null,
    email: null,
    biography: null,
    phoneNumber: null,
    isLogged: true,
  },
  reducers: {
    userAuthorize(state, action) {
      state.firstName = action.payload.firstName;
      state.secondName = action.payload.secondName;
      state.email = action.payload.email;
      state.password = action.payload.password;
      if (action.payload.password !== '' && action.payload !== '') {
        state.isLogged = true;
      }
    },
  },
});

export const { userAuthorize } = userSlice.actions;

export default userSlice.reducer;
