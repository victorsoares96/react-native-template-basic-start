import React from 'react';
import { expect, it } from '@jest/globals';

import { server } from '../../mocks/server';
import { render } from '../../utils/test.utils';

import { GithubMessage } from '.';

describe('Testing GithubMessage component', () => {
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
  });

  it('should render the component', async () => {
    const { findByText } = render(<GithubMessage />);
    const message = await findByText(/Testing 123/i);
    expect(message).not.toBeNull();
  });
});
