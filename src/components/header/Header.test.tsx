import { render, screen } from '@testing-library/react';
import Header from './Header';
import { MemoryRouter, useLocation } from 'react-router';
import { ContainerQuery } from '@/__tests__/setupTests';

function LocationDisplay() {
  const location = useLocation();
  return <div data-testid="current-location">{location.pathname}</div>;
}

describe('Header Component Tests', () => {
  test('Render', () => {
    render(
      <ContainerQuery>
        <MemoryRouter>
          <Header />
          <LocationDisplay />
        </MemoryRouter>
      </ContainerQuery>
    );

    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  test('Active About Link', async () => {
    render(
      <ContainerQuery>
        <MemoryRouter initialEntries={['/about']}>
          <Header />
        </MemoryRouter>
      </ContainerQuery>
    );

    const activeLink = screen.getByText('About Us');
    expect(activeLink).toHaveClass('active');
  });
});
