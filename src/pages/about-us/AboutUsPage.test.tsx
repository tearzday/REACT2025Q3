import { render, screen } from '@testing-library/react';
import AboutUsPage from './AboutUsPage';

describe('AboutUsPage Tests', () => {
  test('Render', () => {
    render(<AboutUsPage />);

    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });
});
