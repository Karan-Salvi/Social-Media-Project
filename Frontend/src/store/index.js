import { configureStore } from "@reduxjs/toolkit";
import tabSlice from "./tabStatusSlice";
import postListSlice from "./postListSlice";
import fetchStatusSlice from "./fetchStatusSlice";

const facebookStore = configureStore({
  reducer: {
    tabStatus: tabSlice.reducer,
    postlist:postListSlice.reducer,
    fetchStatus:fetchStatusSlice.reducer,
  },
});

export default facebookStore;
