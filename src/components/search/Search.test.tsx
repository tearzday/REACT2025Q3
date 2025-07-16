import Search from './Search';
import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('Test Search Сomponent', () => {
  beforeEach(() => {
    localStorage.clear();
  });
  describe('Rendering Tests', () => {
    test('Renders search input and search button', () => {
      const mockFn = vi.fn();
      render(
        <Search
          changeCards={mockFn}
          changeLoading={mockFn}
          changeErrorMessage={mockFn}
        />
      );

      const input = screen.getByPlaceholderText('What are you looking for?');
      const btn = screen.getByRole('button');

      expect(input).toBeInTheDocument();
      expect(btn).toBeInTheDocument();
    });

    test('Displays previously saved search term from localStorage on mount', () => {
      localStorage.setItem('search-character-value', 'rick');

      const mockFn = vi.fn();
      render(
        <Search
          changeCards={mockFn}
          changeLoading={mockFn}
          changeErrorMessage={mockFn}
        />
      );

      const input = screen.getByPlaceholderText('What are you looking for?');

      expect(input).toHaveValue('rick');
    });

    test('Shows empty input when no saved term exists', () => {
      const mockFn = vi.fn();
      render(
        <Search
          changeCards={mockFn}
          changeLoading={mockFn}
          changeErrorMessage={mockFn}
        />
      );

      const input = screen.getByPlaceholderText('What are you looking for?');

      expect(input).toHaveValue('');
    });
  });

  describe('User Interaction Tests', () => {
    test('Updates input value when user types', async () => {
      const mockFn = vi.fn();
      render(
        <Search
          changeCards={mockFn}
          changeLoading={mockFn}
          changeErrorMessage={mockFn}
        />
      );
      const input = screen.getByPlaceholderText('What are you looking for?');

      await userEvent.type(input, 'rick');

      expect(input).toHaveValue('rick');
    });

    test('Saves search term to localStorage when search button is clicked', async () => {
      const mockFn = vi.fn();
      render(
        <Search
          changeCards={mockFn}
          changeLoading={mockFn}
          changeErrorMessage={mockFn}
        />
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
      const mockFn = vi.fn();
      render(
        <Search
          changeCards={mockFn}
          changeLoading={mockFn}
          changeErrorMessage={mockFn}
        />
      );

      const input = screen.getByPlaceholderText('What are you looking for?');
      await userEvent.type(input, 'rick   ');

      const btn = screen.getByRole('button');

      await userEvent.click(btn);
      await waitFor(() =>
        expect(localStorage.getItem('search-character-value')).toBe('rick')
      );
    });

    test('Triggers search callback with correct parameters', async () => {
      const changeLoading = vi.fn();
      const changeCards = vi.fn();
      const changeErrorMessage = vi.fn();

      render(
        <Search
          changeCards={changeCards}
          changeLoading={changeLoading}
          changeErrorMessage={changeErrorMessage}
        />
      );

      const input = screen.getByPlaceholderText('What are you looking for?');
      await userEvent.type(input, 'rick');

      const btn = screen.getByRole('button');

      await userEvent.click(btn);

      await waitFor(() => {
        expect(changeLoading).toHaveBeenCalledWith(true);
        expect(changeCards).toHaveBeenCalled();
      });
    });
  });
});
