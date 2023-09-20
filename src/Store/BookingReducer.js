import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedMovie: null,
  numberOfTickets: 0,
  totalPrice: 0,
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setSelectedMovie(state, action) {
      state.selectedMovie = action.payload;
    },
    setNumberOfTickets(state, action) {
      state.numberOfTickets = action.payload;
    },
    setTotalPrice(state, action) {
      state.totalPrice = action.payload;
    },
  },
});

export const { setSelectedMovie, setNumberOfTickets, setTotalPrice } = bookingSlice.actions;

export default bookingSlice.reducer;