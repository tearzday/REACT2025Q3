import Input from '../UI/input/Input';
import Button from '../UI/button/Button';
import style from './Search.module.scss';
import { useEffect, useState } from 'react';
import type { GetCards } from '@/types';

export type SearchProps = {
  search: (params: GetCards) => void;
};

function Search({ search }: SearchProps) {
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    const currentValue = localStorage.getItem('search-character-value') ?? '';
    setValue(currentValue);
    search({ name: currentValue });
  }, []);

  const handlerClick = () => {
    const trimValue = value.trimEnd();
    setValue(trimValue);
    search({ name: trimValue });
    localStorage.setItem('search-character-value', trimValue);
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
