import { render, screen } from '@testing-library/react';
import Header from './Header';
import { MemoryRouter } from 'react-router';

describe('Header Component Tests', () => {
  test('Render', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});
