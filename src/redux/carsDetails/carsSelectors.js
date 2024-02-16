import { createSelector } from '@reduxjs/toolkit';

export const selectCars = state => state.cars.cars;
export const selectIsLoading = state => state.cars.isLoading;
export const selectError = state => state.cars.error;

export const getFilterValue = state => state.filter.value;

export const getFiltredCars = createSelector(
  [selectCars, getFilterValue],
  (carsItem, filter) => {
    const normalizedFilter = filter.toLowerCase().trim();
    return carsItem.filter(car =>
      car.make.toLowerCase().includes(normalizedFilter)
    );
  }
);
