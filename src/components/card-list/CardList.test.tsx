import { render, screen } from '@testing-library/react';
import CardList from './CardList';
import { dataCards } from '@/__tests__/__mocks__/MockCard';
import { MemoryRouter } from 'react-router';

vi.mock('./api/card', () => ({
  getCards: vi.fn(),
}));

const cards = dataCards.cards;

describe('CardList Component Tests', () => {
  describe('Rendering Tests', () => {
    test('Renders correct number of items when data is provided', async () => {
      render(
        <MemoryRouter>
          <CardList isLoading={false} cards={cards} errorMessage="" />
        </MemoryRouter>
      );

      const cardCount = await screen.findAllByTestId('card-item');
      expect(cardCount.length).toBe(5);
    });

    test('Displays "no results" message when data array is empty', async () => {
      render(
        <MemoryRouter>
          <CardList isLoading={false} cards={[]} errorMessage="" />
        </MemoryRouter>
      );

      const emptyInfo = screen.getByText('No results');

      expect(emptyInfo).toBeInTheDocument();
    });

    test('Shows loading', async () => {
      render(
        <MemoryRouter>
          <CardList isLoading={true} cards={cards} errorMessage="" />
        </MemoryRouter>
      );

      const loader = await screen.findByTestId('loader');

      expect(loader).toBeInTheDocument();
    });
  });

  describe('Data Display Tests', () => {
    test('Correctly displays item names and descriptions', () => {
      render(
        <MemoryRouter>
          <CardList isLoading={false} cards={cards} errorMessage="" />
        </MemoryRouter>
      );

      const cardName = screen.getByText('Rick Sanchez');

      expect(cardName).toBeInTheDocument();
    });
  });

  describe('Error Handling Tests', () => {
    test('Display error message', () => {
      render(
        <CardList
          isLoading={false}
          cards={cards}
          errorMessage="Something went wrong, try again another time!"
        />
      );

      const errorText = screen.getByText(
        'Something went wrong, try again another time!'
      );
      expect(errorText).toBeInTheDocument();
    });
  });
});
