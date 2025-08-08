import Input from '../UI/input/Input';
import Button from '../UI/button/Button';
import style from './Search.module.scss';
import { useEffect, useState } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';
import useGetCards from '@/hooks/useGetCards';
import useAppStore, { changeSearch, page, search } from '@/store/app';

function Search() {
  const [value, setValue] = useState<string>('');
  const [lsValue, setLsValue] = useLocalStorage('search-character-value');

  const currentPage = useAppStore(page);
  const currentSearch = useAppStore(search);
  const setCurrentSearch = useAppStore(changeSearch);

  useGetCards({ page: String(currentPage), name: currentSearch });

  useEffect(() => {
    setValue(lsValue);
    setCurrentSearch(lsValue);
  }, []);

  const handlerClick = () => {
    const trimValue = value.trimEnd();
    setValue(trimValue);
    setLsValue(trimValue);
    setCurrentSearch(trimValue);
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
