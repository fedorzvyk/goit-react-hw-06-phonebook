import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = '';

const filterSlice = createSlice({
  name: "filter",
  initialState: {value: filterInitialState},
  reducers: {
    setFilter(state, action) {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});


export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;