import type { CardInfo } from '../UI/card/card.type';

export type SearchProps = {
  changeCards: (cards: CardInfo[]) => void;
  changeLoading: (loading: boolean) => void;
};
