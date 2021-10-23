import { server } from 'mocks/server';
import counterReducer, {
  reset,
  increment,
  decrement,
  incrementAsync,
  githubMessage,
} from './counter.slice';

import { store } from '../store';

import { InitialCounterState } from './types';

describe('counter reducer', () => {
  beforeAll(() => {
    server.listen({
      onUnhandledRequest(req) {
        // eslint-disable-next-line no-console
        console.error(
          'Found an unhandled %s request to %s',
          req.method,
          req.url.href,
        );
      },
    });
  });
  afterAll(() => {
    server.close();
  });
  afterEach(() => {
    server.resetHandlers();
    store.dispatch(reset());
  });

  const initialState: InitialCounterState = {
    value: 3,
    message: '',
    status: 'idle',
  };

  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      message: '',
      status: 'idle',
    });
  });

  it('should handle increment', () => {
    const actual = counterReducer(initialState, increment());
    expect(actual.value).toEqual(4);
  });

  it('should handle decrement', () => {
    const actual = counterReducer(initialState, decrement());
    expect(actual.value).toEqual(2);
  });

  it('should update the state correctly in incrementAsync', async () => {
    await store.dispatch(incrementAsync(1));

    const state = store.getState().counter;

    const nextState = {
      ...initialState,
      value: 1,
    } as InitialCounterState;

    expect(state).toEqual(nextState);
  }, 20000);

  it('should update the state correctly in githubMessage', async () => {
    await store.dispatch(githubMessage());

    const state = store.getState().counter;

    const nextState = {
      ...initialState,
      value: 0,
      message: 'Testing 123',
    } as InitialCounterState;

    expect(state).toEqual(nextState);
  }, 20000);
});
