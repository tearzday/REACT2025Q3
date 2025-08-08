import { render, screen } from '@testing-library/react';
import Pagination from './Pagination';
import { ContainerQuery } from '@/__tests__/setupTests';

describe('Pagination Component Tests', () => {
  vi.mock('react-router', () => ({
    ...vi.importActual('react-router'),
    useNavigate: vi.fn(() => vi.fn()),
    useLocation: vi.fn(() => ({ pathname: '/' })),
    useSearchParams: vi.fn(() => [new URLSearchParams({ page: '1' }), vi.fn()]),
  }));

  test('Render', () => {
    render(
      <ContainerQuery>
        <Pagination />
      </ContainerQuery>
    );

    const node = screen.getByTestId('pagination');
    const children = screen.getAllByTestId('pagination-item');

    expect(node).toBeInTheDocument();
    expect(children.length).toBe(10);
  });
});
