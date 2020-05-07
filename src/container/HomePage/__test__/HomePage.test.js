import React from 'react';
import { render } from '@testing-library/react';
import HomePage from '../HomePage';

test('renders Homepage without crash', () => {
  const { getByTestId } = render(<HomePage />);
  expect(getByTestId('homepage')).toMatchSnapshot();
});
