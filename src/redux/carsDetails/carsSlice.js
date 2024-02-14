import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getCars } from './carsThunk';

const initialState = {
  cars: [],
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cars = action.payload;
      })

      .addMatcher(isAnyOf(getCars.pending), state => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(getCars.rejected), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const carsReducer = carsSlice.reducer;
