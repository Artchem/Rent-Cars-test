import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './carsDetails/carsSlice';
import { filterCarsReducer } from './carsDetails/filterCarsSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { carsFavoriteReducer } from './carsDetails/carsFavoriteSlice';
import { currentPageReducer } from './carsDetails/currentPageSlice';

const carsConfig = {
  key: 'cars',
  storage,
  whitelist: ['favorite'],
  //   blacklist: ['filter'],
};

const carsFavoriteConfig = {
  key: 'favorite',
  storage,
};

export const store = configureStore({
  reducer: {
    cars: persistReducer(carsConfig, carsReducer),
    filter: filterCarsReducer,
    favorite: persistReducer(carsFavoriteConfig, carsFavoriteReducer),
    currentPage: currentPageReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
