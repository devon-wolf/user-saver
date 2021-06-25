import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the search box', () => {
  render(<App />);
  const searchInput = screen.getByRole('textbox');
  expect(searchInput).toBeInTheDocument();
});
