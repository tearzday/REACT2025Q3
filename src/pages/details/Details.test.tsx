import { render, screen } from '@testing-library/react';
import DetailsPage from './Details';

vi.mock('react-router', () => ({
  ...vi.importActual('react-router'),
  useNavigate: vi.fn(),
  useParams: vi.fn(() => ({ cardId: '1' })),
  useSearchParams: vi.fn(() => [new URLSearchParams({ page: '1' }), vi.fn()]),
}));

describe('DetailsPage Tests', () => {
  test('Render Test', () => {
    render(<DetailsPage />);

    expect(screen.getByTestId('details-page')).toBeInTheDocument();
  });
});
