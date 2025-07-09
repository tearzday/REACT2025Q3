import type { CardInfo } from '../UI/card/card.type';

export type CardListProps = {
  cards: CardInfo[];
  isLoading: boolean;
  errorMessage: string;
};
