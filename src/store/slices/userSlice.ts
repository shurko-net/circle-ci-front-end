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
    subscribed: 0,
    subdomain: '',
    image: '',
    followers: 0,
  },
  reducers: {
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
    setFolowers(state, action) {
      state.followers = action.payload;
    },
    setUser(state, action) {
      state.id = action.payload.id;
      state.firstName = action.payload.firstName;
      state.secondName = action.payload.secondName;
      state.password = action.payload.password;
      state.biography = action.payload.biography;
      state.phoneNumber = action.payload.phoneNumber;
      state.subscribed = action.payload.subscribed;
      state.subdomain = action.payload.subdomain;
      state.image = action.payload.image;
      state.followers = action.payload.followers;
    },
  },
});

export const {
  setUserImage, setUserEmail, setUserSubdomain, setUserName, setUserBio,
  setUserPhone, setFolowers, setUser,
} = userSlice.actions;

export default userSlice.reducer;
