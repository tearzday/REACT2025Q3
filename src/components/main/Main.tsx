import CardList from '../card-list/CardList';
import type { CardInfo, GetCards } from '@/types';
import style from './Main.module.scss';
import Pagination from '../pagination/Pagination';

interface MainProps {
  totalPages: number;
  cards: CardInfo[];
  loading: boolean;
  errorMessage: string;
  getCards: (params: GetCards) => void;
}

function Main({
  totalPages,
  cards,
  loading,
  errorMessage,
  getCards,
}: MainProps) {
  return (
    <main className={style.main} data-testid="main">
      <CardList cards={cards} isLoading={loading} errorMessage={errorMessage} />
      {!loading && <Pagination count={totalPages} getCards={getCards} />}
    </main>
  );
}

export default Main;
