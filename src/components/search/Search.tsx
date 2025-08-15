'use client';

import Input from '../UI/input/Input';
import Button from '../UI/button/Button';
import style from './Search.module.scss';
import { useEffect, useState } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';
import useGetCards from '@/hooks/useGetCards';
import useAppStore, { changeSearch, page, search } from '@/store/app';
import { useTranslations } from 'next-intl';

function Search() {
  const [value, setValue] = useState<string>('');
  const [lsValue, setLsValue] = useLocalStorage('search-character-value');
  const t = useTranslations('Search');

  const currentPage = useAppStore(page);
  const currentSearch = useAppStore(search);
  const setCurrentSearch = useAppStore(changeSearch);

  useGetCards({ page: currentPage, name: currentSearch });

  useEffect(() => {
    setValue(lsValue);
    setCurrentSearch(lsValue);
  }, [lsValue, setCurrentSearch]);

  const handlerClick = () => {
    const trimValue = value.trimEnd();
    setValue(trimValue);
    setLsValue(trimValue);
    setCurrentSearch(trimValue);
  };

  return (
    <div className={style.search}>
      <Input
        type="text"
        placeholder={t('placeholder')}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></Input>
      <Button onClick={handlerClick}>{t('btn')}</Button>
    </div>
  );
}

export default Search;
