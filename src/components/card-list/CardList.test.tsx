import { render, screen } from '@testing-library/react';
import CardList from './CardList';
import { MemoryRouter } from 'react-router';
import { ContainerQuery } from '@/__tests__/setupTests';
import { dataCards } from '@/__tests__/__mocks__/MockCard';

vi.mock('./api/card', () => ({
  getCards: vi.fn(),
}));

vi.mock('@/hooks/useGetCards', () => ({
  default: () => ({
    cards: dataCards.cards,
    pages: 10,
    isLoading: false,
    error: null,
    refetch: vi.fn(),
  }),
}));

describe('CardList Component Tests', () => {
  describe('Rendering Tests', () => {
    test('Renders correct number of items when data is provided', async () => {
      render(
        <ContainerQuery>
          <MemoryRouter>
            <CardList />
          </MemoryRouter>
        </ContainerQuery>
      );

      const cardCount = await screen.findAllByTestId('card-item');
      expect(cardCount.length).toBe(5);
    });
  });

  describe('Data Display Tests', () => {
    test('Correctly displays item names and descriptions', () => {
      render(
        <ContainerQuery>
          <MemoryRouter>
            <CardList />
          </MemoryRouter>
        </ContainerQuery>
      );

      const cardName = screen.getByText('Rick Sanchez');

      expect(cardName).toBeInTheDocument();
    });
  });
});
