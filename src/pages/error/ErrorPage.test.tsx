import { render, screen } from '@testing-library/react';
import ErrorPage from './ErrorPage';
import { MemoryRouter } from 'react-router';
import { ContainerQuery } from '@/__tests__/setupTests';

describe('Error Page Tests', () => {
  test('Render', () => {
    render(
      <ContainerQuery>
        <MemoryRouter>
          <ErrorPage />
        </MemoryRouter>
      </ContainerQuery>
    );

    expect(
      screen.getByText("Oops! This page doesn't exist.")
    ).toBeInTheDocument();
  });
});
