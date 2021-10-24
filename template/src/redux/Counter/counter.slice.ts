/* eslint-disable no-param-reassign */
import { createSlice, isPending, isFulfilled } from '@reduxjs/toolkit';

import { incrementAsync, githubMessage } from './counter.actions';
import { InitialCounterState } from './types';

const initialState: InitialCounterState = {
  value: 0,
  message: '',
  status: 'idle',
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    reset: () => initialState,
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
  },
  extraReducers: builder => {
    builder
      .addMatcher(isPending(incrementAsync, githubMessage), state => {
        state.status = 'loading';
      })
      .addMatcher(isFulfilled(incrementAsync), (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      })
      .addMatcher(isFulfilled(githubMessage), (state, action) => {
        state.status = 'idle';
        state.message = action.payload;
      });
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export { incrementAsync, githubMessage };
export default counterSlice.reducer;
