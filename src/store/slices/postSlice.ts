import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'Post',
  initialState: {
    category: [],
    commentsAmount: 0,
    content: '',
    createdAt: '',
    id: 0,
    imageUrl: '',
    isLiked: false,
    isMyself: true,
    isPostOwner: true,
    isSaved: false,
    likesAmount: 0,
    name: '',
    profileImageUrl: '',
    surname: '',
    title: '',
    userId: 0,
    viewsAmount: 0,
  },
  reducers: {
    setPost(state, action) {
      state.category = action.payload.category;
      state.commentsAmount = action.payload.commentsAmount;
      state.content = action.payload.content;
      state.createdAt = action.payload.createdAt;
      state.id = action.payload.id;
      state.imageUrl = action.payload.imageUrl;
      state.isLiked = action.payload.isLiked;
      state.isMyself = action.payload.isMyself;
      state.isPostOwner = action.payload.isPostOwner;
      state.isSaved = action.payload.isSaved;
      state.likesAmount = action.payload.likesAmount;
      state.name = action.payload.name;
      state.profileImageUrl = action.payload.profileImageUrl;
      state.surname = action.payload.surname;
      state.title = action.payload.title;
      state.userId = action.payload.userId;
      state.viewsAmount = action.payload.viewsAmount;
    },
    setComment(state, action) {
      state.commentsAmount = action.payload;
    },
    setLikes(state, action) {
      state.likesAmount = action.payload;
    },
    setLiked(state, action) {
      state.isLiked = action.payload;
    },
    setPostImage(state, action) {
      state.imageUrl = `data:image/jpeg;base64,${action.payload}`;
    },
    setPostId(state, action) {
      state.id = action.payload;
    },
    setPostDate(state, action) {
      state.createdAt = action.payload;
    },

  },
});

export const {
  setPost, setLikes, setLiked, setPostImage, setPostId, setPostDate, setComment,
} = postSlice.actions;

export default postSlice.reducer;
