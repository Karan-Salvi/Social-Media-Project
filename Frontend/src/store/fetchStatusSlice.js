import {createSlice} from "@reduxjs/toolkit"

const fetchStatusSlice = createSlice({
  name:'fetchStatus',
  initialState:{
    fetchDone:false,
    currentlyFetching:false,
  },
  reducers:{
   markFetchDone:(state)=>{
    state.fetchDone = true;
   },
   fetchingStarted:(state)=>{
    state.currentlyFetching = true;
   },
   fetchingFinished:(state)=>{
    state.currentlyFetching = false;
   }
  }
})

export const fetchStatusActions = fetchStatusSlice.actions;


export default fetchStatusSlice;