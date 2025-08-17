import { useEffect, useState } from 'react';

type UseLocalStorageReturn = [string, (value: string) => void];

const useLocalStorage = (key: string): UseLocalStorageReturn => {
  const [localValue, setLocalValue] = useState('');

  useEffect(() => {
    const initValue = localStorage.getItem(key);
    if (initValue) {
      setLocalValue(initValue);
    }
  }, [key]);

  const setValue = (value: string) => {
    localStorage.setItem('search-character-value', value);
    setLocalValue(value);
  };

  return [localValue, setValue];
};

export default useLocalStorage;
