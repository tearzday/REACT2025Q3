import { render, screen } from '@testing-library/react';
import ErrorPage from './ErrorPage';
import { MemoryRouter } from 'react-router';

describe('Error Page Tests', () => {
  test('Render', () => {
    render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>
    );

    expect(
      screen.getByText("Oops! This page doesn't exist.")
    ).toBeInTheDocument();
  });
});
