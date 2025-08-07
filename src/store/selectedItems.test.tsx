import {
  dataCard,
  dataCards,
  mockUseSelectedItems,
} from '@/__tests__/__mocks__/MockCard';
import {
  addSelectedItem,
  deleteSelectedItem,
  selectItemsCount,
} from './selectedItems';

describe('Test useSelectedItems', () => {
  beforeEach(() => {
    mockUseSelectedItems().clear();
  });

  test('Add item', () => {
    addSelectedItem(mockUseSelectedItems())(dataCard);

    expect(selectItemsCount(mockUseSelectedItems())).toBe(1);
    expect(mockUseSelectedItems().items).toEqual([dataCard]);
  });

  test('Delete item', () => {
    const cards = dataCards.cards;
    const cardsCount = cards.length;

    for (let i = 0; i < cardsCount; i++) {
      addSelectedItem(mockUseSelectedItems())(cards[i]);
    }

    expect(selectItemsCount(mockUseSelectedItems())).toBe(cardsCount);

    deleteSelectedItem(mockUseSelectedItems())(cards[0].id);

    expect(selectItemsCount(mockUseSelectedItems())).toBe(cardsCount - 1);

    cards.shift();
    expect(mockUseSelectedItems().items).toEqual(cards);

    mockUseSelectedItems().clear();

    expect(selectItemsCount(mockUseSelectedItems())).toBe(0);
    expect(mockUseSelectedItems().items).toEqual([]);
  });
});
