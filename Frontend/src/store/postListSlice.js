import { createSlice } from "@reduxjs/toolkit";

const postListSlice = createSlice({
  name: "postlist",
  initialState: [],
  reducers: {
    addPost: (state, action) => {
      return [action.payload,...state]
      
    },
    removePost: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    addInitialPosts: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const postlistActions = postListSlice.actions;

export default postListSlice;
