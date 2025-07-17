import { render, screen } from '@testing-library/react';
import CardList from './CardList';
import '@testing-library/jest-dom';

const cards = [
  {
    id: 1,
    name: 'Rick Sanchez',
    gender: 'Male',
    species: 'Human',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  },
  {
    id: 2,
    name: 'Morty Smith',
    gender: 'Male',
    species: 'Human',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  },
  {
    id: 3,
    name: 'Summer Smith',
    gender: 'Female',
    species: 'Human',
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
  },
  {
    id: 4,
    name: 'Beth Smith',
    gender: 'Female',
    species: 'Human',
    image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
  },
  {
    id: 5,
    name: 'Jerry Smith',
    gender: 'Male',
    species: 'Human',
    image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
  },
];

vi.mock('./api/card', () => ({
  getCards: vi.fn(),
}));

describe('CardList Component Tests', () => {
  describe('Rendering Tests', () => {
    test('Renders correct number of items when data is provided', async () => {
      render(<CardList isLoading={false} cards={cards} errorMessage="" />);

      const cardCount = await screen.findAllByTestId('card-item');
      expect(cardCount.length).toBe(5);
    });

    test('Displays "no results" message when data array is empty', async () => {
      render(<CardList isLoading={false} cards={[]} errorMessage="" />);

      const emptyInfo = screen.getByText('No results');

      expect(emptyInfo).toBeInTheDocument();
    });

    test('Shows loading', async () => {
      render(<CardList isLoading={true} cards={cards} errorMessage="" />);

      const loader = await screen.findByTestId('loader');

      expect(loader).toBeInTheDocument();
    });
  });

  describe('Data Display Tests', () => {
    test('Correctly displays item names and descriptions', () => {
      render(<CardList isLoading={false} cards={cards} errorMessage="" />);

      const cardName = screen.getByText('Rick Sanchez');
      const cardGenders = screen.getAllByText('Gender: Male');

      expect(cardName).toBeInTheDocument();
      expect(cardGenders.length).toBe(3);
    });
  });

  describe('Error Handling Tests', () => {
    test('Display error message', () => {
      render(
        <CardList
          isLoading={false}
          cards={cards}
          errorMessage="Something went wrong, try again another time!"
        />
      );

      const errorText = screen.getByText(
        'Something went wrong, try again another time!'
      );
      expect(errorText).toBeInTheDocument();
    });
  });
});
