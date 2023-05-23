import React from 'react';
import { render } from '@testing-library/react-native';

import {Card} from './Card';

describe('Card', () => {
  it('should render successfully', () => {
    const { root } = render(<Card />);
    expect(root).toBeTruthy();
  });
});
