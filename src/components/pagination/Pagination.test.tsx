import { render, screen } from '@testing-library/react';
import Pagination from './Pagination';
import userEvent from '@testing-library/user-event';

describe('Pagination Component Tests', () => {
  const getCards = vi.fn();

  vi.mock('react-router', () => ({
    ...vi.importActual('react-router'),
    useNavigate: vi.fn(() => vi.fn()),
    useLocation: vi.fn(() => ({ pathname: '/' })),
    useSearchParams: vi.fn(() => [new URLSearchParams({ page: '1' }), vi.fn()]),
  }));

  test('Render', () => {
    render(<Pagination getCards={getCards} count={10} />);

    const node = screen.getByTestId('pagination');
    const children = screen.getAllByTestId('pagination-item');

    expect(node).toBeInTheDocument();
    expect(children.length).toBe(10);
  });

  test('Click', async () => {
    render(<Pagination getCards={getCards} count={10} />);

    const pageBtn = screen.getByText('3');
    await userEvent.click(pageBtn);
    expect(getCards).toHaveBeenCalled();
  });
});
