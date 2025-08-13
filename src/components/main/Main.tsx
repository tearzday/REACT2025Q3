'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import CardList from '../card-list/CardList';
import style from './Main.module.scss';
import Pagination from '../pagination/Pagination';

function Main() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const closeDetails = () => {
    if (searchParams) {
      const page = searchParams.get('page');
      if (page) {
        router.push(`/?page=${page}`);
      } else {
        router.push('/');
      }
    }
  };

  return (
    <main className={style.main} data-testid="main" onClick={closeDetails}>
      <CardList />
      <Pagination />
    </main>
  );
}

export default Main;
