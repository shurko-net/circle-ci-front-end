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
    image: '',
    comments: [],
  },
  reducers: {
    setPost(state, action) {
      state.idPost = action.payload.id;
      state.idUser = action.payload.idUser;
      state.idCategory = action.payload.idCategory;
      state.date = action.payload.date;
      state.postContent = action.payload.content;
      state.title = action.payload.title;
      state.likes = action.payload.likes;
      state.comments = action.payload;
    },
    setComment(state, action) {
      state.comments = action.payload;
    },
    setLikes(state, action) {
      state.likes = action.payload;
    },
    setLiked(state, action) {
      state.isLiked = action.payload;
    },
    setPostImage(state, action) {
      state.image = `data:image/jpeg;base64,${action.payload}`;
    },
    setPostId(state, action) {
      state.idPost = action.payload;
    },
    setPostDate(state, action) {
      state.date = action.payload;
    },

  },
});

export const {
  setPost, setLikes, setLiked, setPostImage, setPostId, setPostDate, setComment,
} = postSlice.actions;

export default postSlice.reducer;
