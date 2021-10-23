import React from 'react';
import { render } from '@testing-library/react-native';
import { expect, it } from '@jest/globals';

import { Home } from './index';

describe('Testing Home Screen', () => {
  it('should render the screen', async () => {
    const { getByText } = render(<Home />);
    const welcomeToHome = getByText(/welcome to home screen/i);
    const helloWorld = getByText(/hello world/i);

    expect(welcomeToHome).not.toBeNull();
    expect(helloWorld).not.toBeNull();
  });
});
