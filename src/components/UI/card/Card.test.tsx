import { render, screen } from '@testing-library/react';
import Card from './Card';
import { dataCard } from '@/__tests__/__mocks__/MockCard';

vi.mock('react-router', () => ({
  ...vi.importActual('react-router'),
  useNavigate: vi.fn(),
  useSearchParams: vi.fn(() => [new URLSearchParams({ page: '1' }), vi.fn()]),
}));

describe('Card Component Tests', () => {
  test('Render Card Component', () => {
    render(<Card info={dataCard} />);

    const cardName = screen.getByText('Rick Sanchez');

    expect(cardName).toBeInTheDocument();
  });
});
