import { ContainerQuery } from '@/__tests__/setupTests';
import Search from './Search';
import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

describe('Test Search Component', () => {
  vi.mock('react-router', () => ({
    ...vi.importActual('react-router'),
    useNavigate: vi.fn(),
    useLocation: vi.fn(),
    useSearchParams: vi.fn(() => [new URLSearchParams({ page: '1' }), vi.fn()]),
  }));

  describe('Rendering Tests', () => {
    test('Renders search input and search button', () => {
      render(
        <ContainerQuery>
          <Search />
        </ContainerQuery>
      );

      const input = screen.getByPlaceholderText('What are you looking for?');
      const btn = screen.getByRole('button');

      expect(input).toBeInTheDocument();
      expect(btn).toBeInTheDocument();
    });

    test('Shows empty input when no saved term exists', () => {
      render(
        <ContainerQuery>
          <Search />
        </ContainerQuery>
      );

      const input = screen.getByPlaceholderText('What are you looking for?');

      expect(input).toHaveValue('');
    });
  });

  describe('User Interaction Tests', () => {
    test('Updates input value when user types', async () => {
      render(
        <ContainerQuery>
          <Search />
        </ContainerQuery>
      );
      const input = screen.getByPlaceholderText('What are you looking for?');

      await userEvent.type(input, 'rick');

      expect(input).toHaveValue('rick');
    });

    test('Displays previously saved search term from localStorage on mount', () => {
      localStorage.setItem('search-character-value', 'rick');

      render(
        <ContainerQuery>
          <Search />
        </ContainerQuery>
      );

      const input = screen.getByPlaceholderText('What are you looking for?');

      expect(input).toHaveValue('rick');
    });

    test('Updates localStorage when input changes', async () => {
      render(
        <ContainerQuery>
          <Search />
        </ContainerQuery>
      );

      const input = screen.getByPlaceholderText('What are you looking for?');
      await userEvent.type(input, 'rick');
      await userEvent.type(input, ' and morty');

      const btn = screen.getByRole('button');
      await userEvent.click(btn);

      await waitFor(() =>
        expect(localStorage.getItem('search-character-value')).toBe(
          'rick and morty'
        )
      );
    });

    test('Saves search term to localStorage when search button is clicked', async () => {
      render(
        <ContainerQuery>
          <Search />
        </ContainerQuery>
      );

      const input = screen.getByPlaceholderText('What are you looking for?');
      await userEvent.type(input, 'rick');

      const btn = screen.getByRole('button');

      await userEvent.click(btn);
      await waitFor(() =>
        expect(localStorage.getItem('search-character-value')).toBe('rick')
      );
    });

    test('Trims whitespace from search input before saving', async () => {
      render(
        <ContainerQuery>
          <Search />
        </ContainerQuery>
      );

      const input = screen.getByPlaceholderText('What are you looking for?');
      await userEvent.type(input, 'rick   ');

      const btn = screen.getByRole('button');

      await userEvent.click(btn);
      await waitFor(() =>
        expect(localStorage.getItem('search-character-value')).toBe('rick')
      );
    });
  });
});
