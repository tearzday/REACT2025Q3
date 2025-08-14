'use client';

import { useContext } from 'react';
import Search from '@/components/search/Search';
import Main from '@/components/main/Main';
import style from './home.module.scss';
// import { Outlet } from 'react-router';
import Header from '@/components/header/Header';
import { ThemeContext } from '@/context';
import ItemsPanel from '@/components/items-panel/ItemsPanel';
import useSelectedItems, { selectItemsCount } from '@/store/selectedItems';
import { APIData } from '@/types';
import useGetCards from '@/hooks/useGetCards';
import useAppStore, { page, search } from '@/store/app';

function HomeClient({ initialData }: { initialData: APIData }) {
  const currentPage = useAppStore(page);
  const currentSearch = useAppStore(search);

  const { theme } = useContext(ThemeContext);
  const itemsCount = useSelectedItems(selectItemsCount);
  console.log(initialData);

  useGetCards({
    name: currentSearch,
    page: currentPage,
    initialData,
  });

  return (
    <div className={theme}>
      <Header />
      <div className={style.home__page}>
        <div className={style.main__content}>
          <Search />
          <Main />
        </div>
        {/* <Outlet /> */}
        {itemsCount > 0 && <ItemsPanel />}
      </div>
    </div>
  );
}

export default HomeClient;
