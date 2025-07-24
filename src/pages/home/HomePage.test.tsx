import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

vi.mock(
  'react-router',
  async (importOriginal: () => Promise<typeof import('react-router')>) => {
    const actual = await importOriginal();
    return {
      ...actual,
      useNavigate: vi.fn(),
      useLocation: vi.fn(() => ({ pathname: '/' })),
      useSearchParams: vi.fn(() => [
        new URLSearchParams({ page: '1' }),
        vi.fn(),
      ]),
      Outlet: actual.Outlet,
    };
  }
);

describe('Tests HomePage Component', () => {
  test('Render HomePage', () => {
    render(<HomePage />);

    const searchComponent = screen.getByTestId('search');
    const main = screen.getByTestId('main');

    expect(searchComponent).toBeInTheDocument();
    expect(main).toBeInTheDocument();
  });
});
