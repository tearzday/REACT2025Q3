import Button from '../UI/button';
import { useState } from 'react';
import Input from '../UI/input';
import type { Data } from '@/types';

interface SearchProps {
  data: Data | null;
  setData: (data: Data | null) => void;
}

export default function Search({ data, setData }: SearchProps) {
  const [inputValue, setInputValue] = useState<string>('');

  const searchForCountry = () => {
    if (data) {
      const countries = Object.keys(data);
      const newCountries = countries.filter((country) =>
        country.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
      );

      const newData = Object.fromEntries(
        Object.entries(data).filter(([key]) => newCountries.includes(key))
      );
      setData(newData);
    }
  };

  return (
    <div className="max-w-4xl flex gap-4  mx-auto my-5">
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search for a country..."
      />

      <Button onClick={searchForCountry}>Search</Button>
    </div>
  );
}
