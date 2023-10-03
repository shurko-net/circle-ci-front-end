import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'User',
  initialState: {
    id: 0,
    name: '',
    surname: '',
    profileImageUrl: '',
    backgroundImageUrl: '',
    biography: '',
    followersAmount: 0,
  },
  reducers: {
    setUserBio(state, action) {
      state.biography = action.payload;
    },
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
