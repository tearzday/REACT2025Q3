import { fireEvent, render, screen } from '@testing-library/react';
import DetailsPage from './Details';
import { MemoryRouter } from 'react-router';
import { ContainerQuery } from '@/__tests__/setupTests';
describe('DetailsPage Tests', () => {
  test('Render Test', () => {
    render(
      <ContainerQuery>
        <MemoryRouter>
          <DetailsPage />
        </MemoryRouter>
      </ContainerQuery>
    );

    expect(screen.getByTestId('details-page')).toBeInTheDocument();
  });

  test('Loader and Data', async () => {
    render(
      <ContainerQuery>
        <MemoryRouter>
          <DetailsPage />
        </MemoryRouter>
      </ContainerQuery>
    );

    expect(screen.getByTestId('loader')).toBeInTheDocument();

    const textBlock = await screen.findByTestId(
      'details-info-text',
      {},
      { timeout: 3000 }
    );

    expect(textBlock).toBeInTheDocument();
  });

  test('Scroll', async () => {
    render(
      <ContainerQuery>
        <MemoryRouter initialEntries={['/1/?page=1']}>
          <DetailsPage />
        </MemoryRouter>
      </ContainerQuery>
    );

    const details = screen.getByTestId('details-info');
    expect(details).toHaveStyle('height: calc(100svh - 97.4px)');

    fireEvent.scroll(window, { target: { scrollY: 200 } });

    expect(details).toHaveStyle('height: 100vh');
  });
});
