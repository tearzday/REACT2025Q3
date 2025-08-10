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

const renderCardList = () =>
  render(
    <ContainerQuery>
      <MemoryRouter>
        <CardList />
      </MemoryRouter>
    </ContainerQuery>
  );

describe('CardList Component Tests', () => {
  beforeEach(() => renderCardList());

  describe('Rendering Tests', () => {
    test('Renders correct number of items when data is provided', async () => {
      const cardCount = await screen.findAllByTestId('card-item');
      expect(cardCount.length).toBe(5);
    });
  });

  describe('Data Display Tests', () => {
    test('Correctly displays items', async () => {
      dataCards.cards.forEach((mockCard) => {
        expect(screen.getByText(mockCard.name)).toBeInTheDocument();
      });
    });
  });

  describe('Error State Tests', () => {
    beforeEach(() => {
      vi.resetModules();
      vi.doMock('@/hooks/useGetCards', () => ({
        default: () => ({
          cards: [],
          isLoading: false,
          error: { message: 'Error' },
          refetch: vi.fn(),
        }),
      }));
    });

    afterEach(() => {
      vi.resetModules();
    });

    test('Displays error message when error', async () => {
      const { default: CardListWithError } = await import('./CardList');

      render(
        <ContainerQuery>
          <MemoryRouter>
            <CardListWithError />
          </MemoryRouter>
        </ContainerQuery>
      );

      const errorMessage = await screen.findByText(/error/i);
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
