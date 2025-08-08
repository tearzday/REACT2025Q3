import Card from '../UI/card/Card';
import style from './CardList.module.scss';
import Loader from '../UI/loader/Loader';
import type { CardInfo } from '@/types';
import useGetCards from '@/hooks/useGetCards';
import useAppStore, { page, search } from '@/store/app';

function CardList() {
  const currentPage = useAppStore(page);
  const currentSearch = useAppStore(search);

  const { cards, isLoading, error } = useGetCards({
    name: currentSearch,
    page: String(currentPage),
  });

  if (error) {
    return <p className={style.error}>{error.message}</p>;
  }

  return (
    <div className={style.card__list}>
      {isLoading ? (
        <Loader />
      ) : (
        cards.map((info: CardInfo) => {
          return <Card info={info} key={info.id} />;
        })
      )}
    </div>
  );
}

export default CardList;
