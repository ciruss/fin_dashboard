import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const expenseInput = screen.getByLabelText(/enter your expenses/i);
  expect(expenseInput).toBeInTheDocument();
});
