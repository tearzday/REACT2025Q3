import type { CardInfo } from '../UI/card/card.type';

export type SearchProps = {
  currentValue?: string;
  changeCards: (cards: CardInfo[]) => void;
  changeLoading: (loading: boolean) => void;
};
