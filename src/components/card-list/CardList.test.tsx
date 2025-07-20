import { render, screen } from '@testing-library/react';
import CardList from './CardList';
import { dataCards } from '@/__tests__/__mocks__/MockCard';

vi.mock('./api/card', () => ({
  getCards: vi.fn(),
}));

describe('CardList Component Tests', () => {
  describe('Rendering Tests', () => {
    test('Renders correct number of items when data is provided', async () => {
      render(<CardList isLoading={false} cards={dataCards} errorMessage="" />);

      const cardCount = await screen.findAllByTestId('card-item');
      expect(cardCount.length).toBe(5);
    });

    test('Displays "no results" message when data array is empty', async () => {
      render(<CardList isLoading={false} cards={[]} errorMessage="" />);

      const emptyInfo = screen.getByText('No results');

      expect(emptyInfo).toBeInTheDocument();
    });

    test('Shows loading', async () => {
      render(<CardList isLoading={true} cards={dataCards} errorMessage="" />);

      const loader = await screen.findByTestId('loader');

      expect(loader).toBeInTheDocument();
    });
  });

  describe('Data Display Tests', () => {
    test('Correctly displays item names and descriptions', () => {
      render(<CardList isLoading={false} cards={dataCards} errorMessage="" />);

      const cardName = screen.getByText('Rick Sanchez');
      const cardGenders = screen.getAllByText('Gender: Male');

      expect(cardName).toBeInTheDocument();
      expect(cardGenders.length).toBe(3);
    });
  });

  describe('Error Handling Tests', () => {
    test('Display error message', () => {
      render(
        <CardList
          isLoading={false}
          cards={dataCards}
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
