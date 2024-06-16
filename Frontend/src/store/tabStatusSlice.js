import { createSlice } from "@reduxjs/toolkit";

const tabSlice = createSlice({
  name: "tabStatus",
  initialState: "Home",
  reducers: {
    changStatus: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const tabStatusActions = tabSlice.actions;

export default tabSlice;
