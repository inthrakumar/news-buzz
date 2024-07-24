import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  top_news: [],
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
});

export const {} = counterSlice.actions;

export default counterSlice.reducer;
