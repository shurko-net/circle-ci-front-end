import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'User',
  initialState: {
    id: 0,
    firstName: '',
    secondName: '',
    password: '',
    email: '',
    biography: '',
    phoneNumber: '',
    subscribed: '',
    subdomain: '',
    isLogged: false,
    image: null,
  },
  reducers: {
    userAuth(state, action) {
      state.id = action.payload.id;
      state.firstName = action.payload.firstName;
      state.secondName = action.payload.secondName;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.biography = action.payload?.biography ?? '';
      state.phoneNumber = action.payload?.phoneNumber ?? '';
      state.subscribed = action.payload?.subscribed ?? '';
      state.subdomain = (action.payload.firstName + action.payload.secondName).toLowerCase();
      state.isLogged = true;
      state.image = action.payload.userImage ?? '';
      localStorage.setItem('email', action.payload.email);
      localStorage.setItem('password', action.payload.password);
    },
    userSignOut(state) {
      localStorage.clear();
      state.id = 0;
      state.firstName = '';
      state.secondName = '';
      state.email = '';
      state.password = '';
      state.biography = '';
      state.phoneNumber = '';
      state.subscribed = '';
      state.image = null;
      state.isLogged = false;
    },
  },
});

export const { userAuth, userSignOut } = userSlice.actions;

export default userSlice.reducer;
