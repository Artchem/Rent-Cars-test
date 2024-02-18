import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 1,
};

export const currentPageSlice = createSlice({
  name: 'currentPage',
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.page = action.payload;
    },
  },
});

export const { setCurrentPage } = currentPageSlice.actions;

export const currentPageReducer = currentPageSlice.reducer;
