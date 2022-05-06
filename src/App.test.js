import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/What the hell?/i);
  expect(linkElement).toBeInTheDocument();
});
