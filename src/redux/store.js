import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './carsDetails/carsSlice';

export const store = configureStore({
  reducer: {
    cars: carsReducer,
  },
});
