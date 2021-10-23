export type InitialCounterState = {
  value: number;
  message: string;
  status: 'idle' | 'loading' | 'failed';
};
