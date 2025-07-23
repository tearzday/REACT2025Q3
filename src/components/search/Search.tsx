import { useEffect, useState } from 'react';
import Input from '../UI/input/Input';
import Button from '../UI/button/Button';
import style from './Search.module.scss';
import APICard from '@/api/card';
import type { CardInfo } from '@/types';

export type SearchProps = {
  changeErrorMessage: (message: string) => void;
  changeCards: (cards: CardInfo[]) => void;
  changeLoading: (loading: boolean) => void;
};

function Search({
  changeErrorMessage,
  changeCards,
  changeLoading,
}: SearchProps) {
  const [value, setValue] = useState('');

  useEffect(() => {
    const currentValue = localStorage.getItem('search-character-value') ?? '';
    setValue(currentValue);
    searchCards(currentValue);
  }, []);

  const searchCards = async (currentValue: string) => {
    const trimValue = currentValue.trimEnd();

    changeLoading(true);
    setValue(trimValue);

    try {
      const body = {
        name: trimValue,
        page: trimValue ? '1' : '',
      };
      const cards = await APICard.getCards(body);
      changeErrorMessage('');
      changeCards(cards);
    } catch (e) {
      changeErrorMessage(e instanceof Error ? e.message : String(e));
    } finally {
      localStorage.setItem('search-character-value', trimValue);
      changeLoading(false);
    }
  };

  return (
    <div className={style.search} data-testid="search">
      <Input
        type="text"
        placeholder="What are you looking for?"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></Input>
      <Button onClick={() => searchCards(value)}>Search</Button>
    </div>
  );
}

export default Search;
