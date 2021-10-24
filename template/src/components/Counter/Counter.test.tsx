import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { expect, it } from '@jest/globals';

import { server } from '../../mocks/server';
import { render } from '../../utils/test.utils';

import { Counter } from '.';

describe('Testing Counter component', () => {
  beforeAll(() =>
    server.listen({
      onUnhandledRequest(req) {
        // eslint-disable-next-line no-console
        console.error(
          'Found an unhandled %s request to %s',
          req.method,
          req.url.href,
        );
      },
    }),
  );
  beforeEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('should render the component', () => {
    const { toJSON } = render(<Counter />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should increment when click in + button', () => {
    const { getByText } = render(<Counter />);

    const increment = getByText('+');

    fireEvent.press(increment);
    expect(getByText(/1/)).not.toBeNull();
  });

  it('should decrement when click in - button', () => {
    const { getByText } = render(<Counter />);

    const decrement = getByText('-');

    fireEvent.press(decrement);
    expect(getByText(/-1/)).not.toBeNull();
  });

  it('should incrementAsync when click in incrementAsync button', async () => {
    const { getByText, findByText } = render(<Counter />);

    const incrementAsync = getByText(/increment async/i);

    fireEvent.press(incrementAsync);

    const newValue = await findByText(/1/);
    expect(newValue).not.toBeNull();
  });
});
