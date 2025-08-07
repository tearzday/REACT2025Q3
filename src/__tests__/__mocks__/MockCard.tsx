import useSelectedItems from '@/store/selectedItems';

export const dataCards = {
  total: 1,
  cards: [
    {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      gender: 'Male',
      species: 'Human',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      location: {
        name: 'Citadel of Ricks',
      },
    },
    {
      id: 2,
      name: 'Morty Smith',
      status: 'Alive',
      gender: 'Male',
      species: 'Human',
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      location: {
        name: 'Citadel of Ricks',
      },
    },
    {
      id: 3,
      name: 'Summer Smith',
      status: 'Alive',
      gender: 'Female',
      species: 'Human',
      image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
      location: {
        name: 'Earth (Replacement Dimension)',
      },
    },
    {
      id: 4,
      name: 'Beth Smith',
      status: 'Alive',
      gender: 'Female',
      species: 'Human',
      image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
      location: {
        name: 'Earth (Replacement Dimension)',
      },
    },
    {
      id: 5,
      name: 'Jerry Smith',
      status: 'Alive',
      gender: 'Male',
      species: 'Human',
      image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
      location: {
        name: 'Earth (Replacement Dimension)',
      },
    },
  ],
};

export const dataCard = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  gender: 'Male',
  species: 'Human',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  location: {
    name: 'Citadel of Ricks',
  },
};

export const mockUseSelectedItems = () => useSelectedItems.getState();
