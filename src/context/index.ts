import { createContext, type Dispatch, type SetStateAction } from 'react';

interface ThemeContextType {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: '',
  setTheme: () => {},
});

export default ThemeContext;
