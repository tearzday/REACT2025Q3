import {
  dataCards,
  mockUseSelectedItems,
} from '@/__tests__/__mocks__/MockCard';
import ItemsPanel from './ItemsPanel';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Test ItemsPanel', () => {
  const cards = dataCards.cards;
  const cardsCount = cards.length;

  beforeAll(() => {
    global.URL.createObjectURL = vi.fn(() => 'blob:http://localhost/fake-url');
    global.URL.revokeObjectURL = vi.fn();
  });

  beforeEach(() => {
    mockUseSelectedItems().clear();
    for (let i = 0; i < cardsCount; i++) {
      mockUseSelectedItems().addItem(cards[i]);
    }
  });

  test('Render', () => {
    render(<ItemsPanel />);

    expect(screen.getByTestId('items-panel')).toBeInTheDocument();

    expect(
      screen.getByText(`${cardsCount} items are selected`)
    ).toBeInTheDocument();
  });

  test('Unselect all', async () => {
    render(<ItemsPanel />);

    const btn = screen.getByText('Unselect all');

    await userEvent.click(btn);

    expect(screen.getByText('0 items are selected')).toBeInTheDocument();
  });

  test('Download', async () => {
    render(<ItemsPanel />);

    const link = await screen.findByRole('link');
    const mockClick = vi.fn();
    link.click = mockClick;

    const btn = screen.getByText('Download');

    await userEvent.click(btn);

    expect(mockClick).toHaveBeenCalled();
    expect(link.getAttribute('download')).toBe(`${cardsCount}_items.csv`);
  });
});
