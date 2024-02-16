import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

export const filterCarsSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setFilter } = filterCarsSlice.actions;

export const filterCarsReducer = filterCarsSlice.reducer;
