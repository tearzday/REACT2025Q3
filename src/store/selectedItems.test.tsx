import {
  dataCard,
  dataCards,
  seletedItems,
} from '@/__tests__/__mocks__/MockCard';

describe('Test useSelectedItems', () => {
  beforeEach(() => {
    seletedItems().clear();
  });

  test('Add item', () => {
    seletedItems().addItem(dataCard);

    expect(seletedItems().itemsCount).toBe(1);
    expect(seletedItems().items).toEqual([dataCard]);
  });

  test('Delete item', () => {
    const cards = dataCards.cards;
    const cardsCount = cards.length;

    for (let i = 0; i < cardsCount; i++) {
      seletedItems().addItem(cards[i]);
    }

    expect(seletedItems().itemsCount).toBe(cardsCount);

    seletedItems().deleteItem(cards[0].id);

    expect(seletedItems().itemsCount).toBe(cardsCount - 1);

    cards.shift();
    expect(seletedItems().items).toEqual(cards);

    seletedItems().clear();

    expect(seletedItems().itemsCount).toBe(0);
    expect(seletedItems().items).toEqual([]);
  });
});
