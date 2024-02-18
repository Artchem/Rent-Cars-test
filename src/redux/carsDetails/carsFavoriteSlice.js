import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const carsFavoryteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite(state, action) {
      state.items.push(action.payload);
    },
    removeFavorite(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});
export const carsFavoriteReducer = carsFavoryteSlice.reducer;
export const { addFavorite, removeFavorite } = carsFavoryteSlice.actions;
