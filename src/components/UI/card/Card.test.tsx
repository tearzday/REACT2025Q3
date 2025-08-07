import { render, screen } from '@testing-library/react';
import Card from './Card';
import { dataCard, mockUseSelectedItems } from '@/__tests__/__mocks__/MockCard';
import userEvent from '@testing-library/user-event';
import { selectItemsCount } from '@/store/selectedItems';

const navigate = vi.fn();

vi.mock('react-router', () => ({
  ...vi.importActual('react-router'),
  useNavigate: () => navigate,
  useSearchParams: vi.fn(() => [new URLSearchParams({ page: '2' }), vi.fn()]),
}));

describe('Card Component Tests', () => {
  beforeEach(() => {
    render(<Card info={dataCard} />);
  });

  test('Render Card Component', () => {
    const cardName = screen.getByText('Rick Sanchez');

    expect(cardName).toBeInTheDocument();
  });

  test('Click card', async () => {
    const card = screen.getByTestId('card-item');
    await userEvent.click(card);

    expect(navigate).toHaveBeenCalledWith(`details/${dataCard.id}/?page=2`);
  });

  test('Click checkbox', async () => {
    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).not.toBeChecked();
    await userEvent.click(checkbox);

    expect(selectItemsCount(mockUseSelectedItems())).toBe(1);
    expect(mockUseSelectedItems().items).toEqual([dataCard]);
    expect(checkbox).toBeChecked();
  });
});
