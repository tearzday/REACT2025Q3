import { render, screen } from '@testing-library/react';
import ErrorPage from './ErrorPage';

describe('Error Page Tests', () => {
  test('Render', () => {
    render(<ErrorPage />);

    expect(
      screen.getByText("Oops! This page doesn't exist.")
    ).toBeInTheDocument();
  });
});
