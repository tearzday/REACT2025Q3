import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';
import { MemoryRouter } from 'react-router';

describe('Tests HomePage Component', () => {
  test('Render HomePage', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    const searchComponent = screen.getByTestId('search');
    const main = screen.getByTestId('main');

    expect(searchComponent).toBeInTheDocument();
    expect(main).toBeInTheDocument();
  });
});
