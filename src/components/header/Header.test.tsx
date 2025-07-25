import { render, screen } from '@testing-library/react';
import Header from './Header';
import { MemoryRouter, useLocation } from 'react-router';

function LocationDisplay() {
  const location = useLocation();
  return <div data-testid="current-location">{location.pathname}</div>;
}

describe('Header Component Tests', () => {
  test('Render', () => {
    render(
      <MemoryRouter>
        <Header />
        <LocationDisplay />
      </MemoryRouter>
    );

    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  test('Active About Link', async () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <Header />
      </MemoryRouter>
    );

    const activeLink = screen.getByText('About Us');
    expect(activeLink).toHaveClass('active');
  });
});
