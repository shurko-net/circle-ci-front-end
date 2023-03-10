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
    image: '',
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
      state.image = '';
      state.isLogged = false;
    },
    setUserImage(state, action) {
      state.image = `data:image/jpeg;base64,${action.payload}`;
    },
    setUserEmail(state, action) {
      state.email = action.payload;
    },
    setUserSubdomain(state, action) {
      state.subdomain = action.payload;
    },
    setUserName(state, action) {
      const userNameArr = action.payload.split(' ');
      state.firstName = userNameArr[0];
      state.secondName = userNameArr[1];
    },
    setUserBio(state, action) {
      state.biography = action.payload;
    },
    setUserPhone(state, action) {
      state.phoneNumber = action.payload;
    },
  },
});

export const {
  userAuth, userSignOut, setUserImage, setUserEmail, setUserSubdomain, setUserName, setUserBio,
  setUserPhone,
} = userSlice.actions;

export default userSlice.reducer;
