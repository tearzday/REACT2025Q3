import CardList from '../card-list/CardList';
import type { CardInfo } from '@/types';
import style from './Main.module.scss';

interface MainProps {
  cards: CardInfo[];
  loading: boolean;
  errorMessage: string;
}

function Main({ cards, loading, errorMessage }: MainProps) {
  return (
    <main className={style.main} data-testid="main">
      <CardList cards={cards} isLoading={loading} errorMessage={errorMessage} />
    </main>
  );
}

export default Main;
