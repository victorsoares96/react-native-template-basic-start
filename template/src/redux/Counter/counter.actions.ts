import { createAsyncThunk } from '@reduxjs/toolkit';
import * as service from './counter.api';

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount: number) => {
    const response = await service.fetchCount(amount);
    return response.data;
  },
);

export const githubMessage = createAsyncThunk<string>(
  'counter/githubMessage',
  async () => {
    const response = await service.githubMessage();
    return response.data;
  },
);
