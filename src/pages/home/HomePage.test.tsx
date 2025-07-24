import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

describe('Tests HomePage Component', () => {
  test('Render HomePage', () => {
    render(<HomePage />);

    const searchComponent = screen.getByTestId('search');
    const main = screen.getByTestId('main');

    expect(searchComponent).toBeInTheDocument();
    expect(main).toBeInTheDocument();
  });
});
