import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getCars } from './carsThunk';

const initialState = {
  cars: [],
  // favorites: [],
  isLoading: false,
  error: null,
  // allCars: [],
  // page: 1,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  // reducers: {
  //   currentPage(state, action) {
  //     state.page = action.payload;
  //   },
  // },

  extraReducers: builder => {
    builder
      .addCase(getCars.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.cars = state.cars.concat(payload);
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
// export const { currentPage } = carsSlice.actions;
