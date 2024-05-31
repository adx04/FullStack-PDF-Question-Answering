import { render, screen } from '@testing-library/react';
import App from './App';

test('renders application header', () => {
  render(<App />);
  const headerElement = screen.getByText(/My Stylish Application/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders upload button', () => {
  render(<App />);
  const uploadButtonElement = screen.getByText(/Upload PDF/i);
  expect(uploadButtonElement).toBeInTheDocument();
});


