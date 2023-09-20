import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './MovieReducers';
import bookingReducer from './BookingReducer';

const store = configureStore({
  reducer: {
    movie: movieReducer,
    booking: bookingReducer,
  },
});

export default store;