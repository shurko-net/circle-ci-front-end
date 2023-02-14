import { createSlice } from '@reduxjs/toolkit';

const aboutSlice = createSlice({
  name: 'About',
  initialState: {
    aboutText: '',
  },
  reducers: {
    aboutText(state, action) {
      state.aboutText = action.payload.aboutText;
    },
  },
});

export const { aboutText } = aboutSlice.actions;

export default aboutSlice.reducer;
