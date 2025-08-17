export type CardInfo = {
  id: number;
  name: string;
  status: string;
  gender: string;
  species: string;
  image: string;
  location: {
    name: string;
  };
};

export type APIData = {
  total: number;
  cards: CardInfo[];
};

export type GetCards = { name?: string; page: number; initialData?: APIData };
