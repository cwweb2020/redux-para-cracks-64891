import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counts: 0,
  customNumber: 1,
};

const counderSlice = createSlice({
  name: "@counter",
  initialState,
  reducers: {
    sumarUno: (state) => {
      state.counts = state.counts + state.customNumber;
    },
    restarUno: (state) => {
      state.counts = state.counts - state.customNumber;
    },
    resetear: (state) => {
      state.counts = initialState.counts;
    },
    setCustomNumber: (state, action) => {
      state.customNumber = action.payload;
    },
  },
});

export const { sumarUno, restarUno, resetear, setCustomNumber } =
  counderSlice.actions;

export default counderSlice.reducer;
