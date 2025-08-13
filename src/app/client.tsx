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

function HomeClient() {
  const { theme } = useContext(ThemeContext);
  const itemsCount = useSelectedItems(selectItemsCount);

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
