import { render, screen } from '@testing-library/react';
import CardList from './CardList';
import { MemoryRouter } from 'react-router';

vi.mock('./api/card', () => ({
  getCards: vi.fn(),
}));

describe('CardList Component Tests', () => {
  describe('Rendering Tests', () => {
    test('Renders correct number of items when data is provided', async () => {
      render(
        <MemoryRouter>
          <CardList />
        </MemoryRouter>
      );

      const cardCount = await screen.findAllByTestId('card-item');
      expect(cardCount.length).toBe(5);
    });
  });

  describe('Data Display Tests', () => {
    test('Correctly displays item names and descriptions', () => {
      render(
        <MemoryRouter>
          <CardList />
        </MemoryRouter>
      );

      const cardName = screen.getByText('Rick Sanchez');

      expect(cardName).toBeInTheDocument();
    });
  });
});
