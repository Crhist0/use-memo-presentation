import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: undefined,
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearState: (state, action) => initialState,
    updateState: (state, action) => action.payload,
  },
});

export const { clearState, updateState } = slice.actions;

export default slice.reducer;
