import React from 'react';
import { render } from '@testing-library/react-native';
import { expect, it } from '@jest/globals';

import { server } from '../../mocks/server';
import { RenderWithRedux } from '../../utils/test.utils';

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
    const { findByText } = render(RenderWithRedux(<GithubMessage />));
    const message = await findByText(/Testing 123/i);
    expect(message).not.toBeNull();
  });
});
