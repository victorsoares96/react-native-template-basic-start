import React from 'react';
import { render } from '@testing-library/react-native';
import { expect, it } from '@jest/globals';

import { RenderWithRedux } from '../../utils/test.utils';

import { HelloWorld } from '.';

describe('Testing HelloWorld component', () => {
  it('should the component', async () => {
    const { getByText } = render(RenderWithRedux(<HelloWorld />));
    const helloWorldText = getByText(/hello world/i);
    expect(helloWorldText).not.toBeNull();
  });
});
