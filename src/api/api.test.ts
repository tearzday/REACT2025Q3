import APICard from './card';
import '@testing-library/jest-dom';

const data = [
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

describe('Test API', () => {
  test('Success fetch', async () => {
    const successGetCards = vi
      .spyOn(APICard, 'getCards')
      .mockResolvedValue(data);
    const cards = await APICard.getCards({ name: 'rick', page: '1' });

    expect(successGetCards).toHaveBeenCalledWith({ name: 'rick', page: '1' });

    expect(cards).toEqual(data);
    successGetCards.mockReset();
  });

  test('Error', async () => {
    const mockFetch = vi.fn();
    global.fetch = mockFetch;
    mockFetch.mockResolvedValue({
      ok: false,
      json: vi.fn().mockResolvedValue('Server Error'),
    });

    await expect(APICard.getCards({})).rejects.toThrow(
      'Something went wrong, try again another time!'
    );
  });

  test('Error "There is nothing here"', async () => {
    const mockFetch = vi.fn();
    global.fetch = mockFetch;
    mockFetch.mockResolvedValue({
      ok: false,
      json: vi.fn().mockResolvedValue({ error: 'There is nothing here' }),
    });

    const result = await APICard.getCards({});
    expect(result).toEqual([]);
  });
});
