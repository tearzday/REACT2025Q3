import { render, screen } from '@testing-library/react';
import AboutUsPage from './AboutUsPage';
import { MemoryRouter } from 'react-router';
import { ContainerQuery } from '@/__tests__/setupTests';

describe('AboutUsPage Tests', () => {
  test('Render', () => {
    render(
      <ContainerQuery>
        <MemoryRouter>
          <AboutUsPage />
        </MemoryRouter>
      </ContainerQuery>
    );

    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });
});
