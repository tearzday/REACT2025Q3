import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';
import { MemoryRouter } from 'react-router';
import ThemeContext from '@/context';
import { dataCard, mockUseSelectedItems } from '@/__tests__/__mocks__/MockCard';
import { ContainerQuery } from '@/__tests__/setupTests';

describe('Tests HomePage Component', () => {
  test('Render HomePage', () => {
    render(
      <ContainerQuery>
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      </ContainerQuery>
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
      <ContainerQuery>
        <ThemeContext value={mockValue}>
          <MemoryRouter>
            <HomePage />
          </MemoryRouter>
        </ThemeContext>
      </ContainerQuery>
    );

    expect(container.firstChild).toHaveClass(mockValue.theme);
  });

  test('View ItemsPanel', () => {
    mockUseSelectedItems().addItem(dataCard);

    render(
      <ContainerQuery>
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      </ContainerQuery>
    );

    expect(screen.getByTestId('items-panel')).toBeInTheDocument();
  });
});
