import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './cartAPI';

const initialState = {
  value: 0,
  status: 'idle',
};
// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async (amount) => {
//     const response = await fetchCount(amount);
//     return response.data;
//   }
// );

export const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    // builder
    //   .addCase(incrementAsync.pending, (state) => {
    //     state.status = 'loading';
    //   })
    //   .addCase(incrementAsync.fulfilled, (state, action) => {
    //     state.status = 'idle';
    //     state.value += action.payload;
    //   });
  },
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
