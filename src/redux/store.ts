/* eslint-disable implicit-arrow-linebreak */
import { configureStore } from '@reduxjs/toolkit';

import { pricelineApi } from '@services/pricelineApi';
import globalReducer from './features/globalSlice';

export const store = configureStore({
  reducer: {
    global: globalReducer,
    [pricelineApi.reducerPath]: pricelineApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(pricelineApi.middleware),
});
