import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCars } from '../../services/api';

export const getCars = createAsyncThunk(
  'cars/getCars',
  async (page, thunkAPI) => {
    try {
      const cars = await fetchCars(page);
      // console.log('cars :>> ', cars);
      return cars;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
