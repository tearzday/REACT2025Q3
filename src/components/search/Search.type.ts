import type { CardInfo } from '../UI/card/card.type';

export type SearchProps = {
  currentValue?: string;
  changeErrorMessage: (message: string) => void;
  changeCards: (cards: CardInfo[]) => void;
  changeLoading: (loading: boolean) => void;
};
