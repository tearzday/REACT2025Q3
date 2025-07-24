import { render, screen } from '@testing-library/react';
import DetailsPage from './Details';
import { useParams } from 'react-router';

vi.mock('react-router', () => ({
  ...vi.importActual('react-router'),
  useNavigate: vi.fn(),
  useParams: vi.fn(),
}));

describe('DetailsPage Tests', () => {
  test('Render Test', () => {
    vi.mocked(useParams).mockReturnValue({ cardId: '1' });
    render(<DetailsPage />);

    expect(screen.getByTestId('details-page')).toBeInTheDocument();
  });
});
