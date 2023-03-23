import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'Post',
  initialState: {
    idPost: 0,
    idUser: 0,
    idCategory: 0,
    date: '',
    postContent: '',
    title: '',
    likes: 0,
    isLiked: false,
  },
  reducers: {
    setPost(state, action) {
      state.idPost = action.payload.idPost;
      state.idUser = action.payload.idUser;
      state.idCategory = action.payload.idCategory;
      state.date = action.payload.date;
      state.postContent = action.payload.postContent;
      state.title = action.payload.title;
      state.likes = action.payload.likes;
    },
    setLikes(state, action) {
      state.likes = action.payload;
    },
    setLiked(state, action) {
      state.isLiked = action.payload;
    },

  },
});

export const {
  setPost, setLikes, setLiked,
} = postSlice.actions;

export default postSlice.reducer;
