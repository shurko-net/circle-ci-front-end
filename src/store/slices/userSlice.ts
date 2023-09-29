import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'User',
  initialState: {
    id: 0,
    name: '',
    surname: '',
    biography: '',
    profileImageUrl: '',
    backgroundImageUrl: '',
    followersAmount: 0,
  },
  reducers: {
    // setUserImage(state, action) {
    //   state.image = action.payload;
    // },
    // setUserBackgroundImage(state, action) {
    //   state.backgroundImage = action.payload;
    // },
    // setUserEmail(state, action) {
    //   state.email = action.payload;
    // },
    // setUserSubdomain(state, action) {
    //   state.subdomain = action.payload;
    // },
    // setUserName(state, action) {
    //   const userNameArr = action.payload.split(' ');
    //   state.firstName = userNameArr[0];
    //   state.secondName = userNameArr[1];
    // },
    setUserBio(state, action) {
      state.biography = action.payload;
    },
    // setUserPhone(state, action) {
    //   state.phoneNumber = action.payload;
    // },
    // setFolowers(state, action) {
    //   state.followers = action.payload;
    // },
    setUser(state, action) {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      state.biography = action.payload.biography;
      state.backgroundImageUrl = action.payload.backgroundImageUrl;
      state.profileImageUrl = action.payload.profileImageUrl;
      state.followersAmount = action.payload.followersAmount;
    },
  },
});

export const {
  setUser,
} = userSlice.actions;

export default userSlice.reducer;
