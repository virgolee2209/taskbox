import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Taskbox', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Taskbox/);
  expect(linkElement).toBeInTheDocument();
});
