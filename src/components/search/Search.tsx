import Input from '../UI/input/Input';
import Button from '../UI/button/Button';
import style from './Search.module.scss';
import { useEffect, useState } from 'react';
import type { GetCards } from '@/types';
import { useSearchParams } from 'react-router';
import useLocalStorage from '@/hooks/useLocalStorage';

export type SearchProps = {
  search: (params: GetCards) => void;
};

function Search({ search }: SearchProps) {
  const [value, setValue] = useState<string>('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [lsValue, setLsValue] = useLocalStorage('search-character-value');

  useEffect(() => {
    setValue(lsValue);
    search({ name: lsValue, page: searchParams.get('page') || '1' });
  }, []);

  const handlerClick = () => {
    setSearchParams('page=1');
    const trimValue = value.trimEnd();
    setValue(trimValue);
    search({ name: trimValue, page: '1' });
    setLsValue(trimValue);
  };

  return (
    <div className={style.search} data-testid="search">
      <Input
        type="text"
        placeholder="What are you looking for?"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></Input>
      <Button onClick={handlerClick}>Search</Button>
    </div>
  );
}

export default Search;
