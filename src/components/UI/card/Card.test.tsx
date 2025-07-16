import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';

const card = {
  id: 1,
  name: 'Rick Sanchez',
  gender: 'Male',
  species: 'Human',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

describe('Card Component Tests', () => {
  test('Render Card Component', () => {
    render(<Card info={card} />);

    const cardName = screen.getByText('Rick Sanchez');
    const cardGenders = screen.getByText('Gender: Male');
    const species = screen.getByText('Species: Human');

    expect(cardName).toBeInTheDocument();
    expect(cardGenders).toBeInTheDocument();
    expect(species).toBeInTheDocument();
  });
});
