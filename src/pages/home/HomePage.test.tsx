import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';
import { MemoryRouter } from 'react-router';
import ThemeContext from '@/context';
import { dataCard, seletedItems } from '@/__tests__/__mocks__/MockCard';

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

  test('Check color them', async () => {
    const mockSetTheme = vi.fn();
    const mockValue = { theme: 'dark', setTheme: mockSetTheme };

    const { container } = render(
      <ThemeContext value={mockValue}>
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      </ThemeContext>
    );

    expect(container.firstChild).toHaveClass(mockValue.theme);
  });

  test('View ItemsPanel', () => {
    seletedItems().addItem(dataCard);

    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    expect(screen.getByTestId('items-panel')).toBeInTheDocument();
  });
});
