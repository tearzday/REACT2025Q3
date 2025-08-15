'use client';

import { useSearchParams } from 'next/navigation';

import CardList from '../card-list/CardList';
import style from './Main.module.scss';
import Pagination from '../pagination/Pagination';
import { useRouter } from '@/i18n/navigation';

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
    <main className={style.main} onClick={closeDetails}>
      <CardList />
      <Pagination />
    </main>
  );
}

export default Main;
