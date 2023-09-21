import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  values: [], // This could be an array where you add values.
};

const movieSlice = createSlice({
  name: 'Hello',
  initialState,
  reducers: {
    addValue: (state, action) => {
      state.values.push(action.payload);
    },
  },
});

export const { addValue } = movieSlice.actions;
export default movieSlice.reducer;