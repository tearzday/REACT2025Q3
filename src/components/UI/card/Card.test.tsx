import { render, screen } from '@testing-library/react';
import Card from './Card';
import { dataCard } from '@/__tests__/__mocks__/MockCard';

describe('Card Component Tests', () => {
  test('Render Card Component', () => {
    render(<Card info={dataCard} />);

    const cardName = screen.getByText('Rick Sanchez');
    const cardGenders = screen.getByText('Gender: Male');
    const species = screen.getByText('Species: Human');

    expect(cardName).toBeInTheDocument();
    expect(cardGenders).toBeInTheDocument();
    expect(species).toBeInTheDocument();
  });
});
