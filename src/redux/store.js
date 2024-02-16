import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './carsDetails/carsSlice';
import { filterCarsReducer } from './carsDetails/filterCarsSlice';

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filter: filterCarsReducer,
  },
});
