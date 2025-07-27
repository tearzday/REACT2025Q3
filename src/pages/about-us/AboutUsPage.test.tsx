import { render, screen } from '@testing-library/react';
import AboutUsPage from './AboutUsPage';
import { MemoryRouter } from 'react-router';

describe('AboutUsPage Tests', () => {
  test('Render', () => {
    render(
      <MemoryRouter>
        <AboutUsPage />
      </MemoryRouter>
    );

    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });
});
