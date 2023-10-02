/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  test: 'Test',
  location: '',
  locationId: '',
  checkIn: null,
  checkOut: null,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    selectLocation: (state, action) => {
      state.location = action.payload;
    },
    selectLocationId: (state, action) => {
      state.locationId = action.payload;
    },
    selectCheckIn: (state, action) => {
      state.checkIn = action.payload;
    },
    selectCheckOut: (state, action) => {
      state.checkOut = action.payload;
    },
  },
});

export const { selectLocation, selectLocationId, selectCheckIn, selectCheckOut } = globalSlice.actions;

export default globalSlice.reducer;
