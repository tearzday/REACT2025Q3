'use client';

import {
  createContext,
  ReactNode,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react';

interface ThemeContextType {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: '',
  setTheme: () => {},
});

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState('light');

  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
}
