import Card from '../UI/card/Card';
import style from './CardList.module.scss';
import Loader from '../UI/loader/Loader';
import type { CardInfo } from '@/types';

export type CardListProps = {
  cards: CardInfo[];
  isLoading: boolean;
  errorMessage: string;
};

function CardList({ cards, isLoading, errorMessage }: CardListProps) {
  if (errorMessage) {
    return <p className={style.error}>{errorMessage}</p>;
  }

  if (!cards.length) {
    return <p className={style.error}>No results</p>;
  }

  return (
    <div className={style.card__list}>
      {isLoading ? (
        <Loader />
      ) : (
        cards.map((info) => <Card info={info} key={info.id} />)
      )}
    </div>
  );
}

export default CardList;
