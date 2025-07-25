import { useState } from 'react';

type UseLocalStorageReturn = [string, (value: string) => void];

const useLocalStorage = (key: string): UseLocalStorageReturn => {
  const initValue = localStorage.getItem(key) ?? '';

  const [localValue, setLocalValue] = useState(initValue);

  const setValue = (value: string) => {
    localStorage.setItem('search-character-value', value);
    setLocalValue(value);
  };

  return [localValue, setValue];
};

export default useLocalStorage;
