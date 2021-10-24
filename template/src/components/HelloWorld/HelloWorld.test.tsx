import React from 'react';
import { expect, it } from '@jest/globals';

import { render } from '../../utils/test.utils';

import { HelloWorld } from '.';

describe('Testing HelloWorld component', () => {
  it('should render the component', () => {
    const { toJSON } = render(<HelloWorld />);

    expect(toJSON()).toMatchSnapshot();
  });
});
