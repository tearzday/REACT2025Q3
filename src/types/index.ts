export type CardInfo = {
  id: number;
  name: string;
  gender: string;
  species: string;
  image: string;
};

export type APIData = {
  total: number;
  cards: CardInfo[];
};

export type GetCards = { name?: string; page?: string };
