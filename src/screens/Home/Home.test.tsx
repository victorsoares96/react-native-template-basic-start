import React from 'react';
import { expect, it } from '@jest/globals';

import { render } from '../../utils/test.utils';

import { Home } from './index';

describe('Testing Home Screen', () => {
  it('should render the screen', () => {
    const { toJSON } = render(<Home />);

    expect(toJSON()).toMatchSnapshot();
  });
});
