import { useState } from 'react';
import Search from '../../components/search/Search';
import type { APIData, CardInfo, GetCards } from '../../types';
import Main from '../../components/main/Main';
import APICard from '../../api/card';
import style from './HomePage.module.scss';
import { Outlet } from 'react-router';
import Header from '@/components/header/Header';

function HomePage() {
  const [cards, setCards] = useState<CardInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [totalPages, setTotalPages] = useState<number>(10);
  const [name, setName] = useState<string>('');

  const getCards = async (params: GetCards) => {
    setLoading(true);
    const searchName = params.name ?? name;

    try {
      const body = {
        name: searchName,
        page: params.page || '1',
      };
      const data: APIData = await APICard.getCards(body);

      setErrorMessage('');
      setCards(data.cards);
      setTotalPages(data.total);
    } catch (e) {
      setErrorMessage(e instanceof Error ? e.message : String(e));
    } finally {
      setLoading(false);
      setName(searchName);
    }
  };

  return (
    <>
      <Header />
      <div className={style.home__page}>
        <div className={style.main__content}>
          <Search search={getCards} />
          <Main
            cards={cards}
            getCards={getCards}
            loading={loading}
            errorMessage={errorMessage}
            totalPages={totalPages}
          />
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default HomePage;
