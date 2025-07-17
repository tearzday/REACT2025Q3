import { render, screen } from '@testing-library/react';
import Loader from './Loader';

describe('Loading Component Tests', () => {
  test('Render loading', () => {
    render(<Loader />);

    expect(screen.getByTestId('loader')).toBeInTheDocument();
    expect(
      screen.getByLabelText('Loading, please wait...')
    ).toBeInTheDocument();
  });
});
