import { createContext } from 'react';

interface ThemeContextType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: '',
  setTheme: () => {},
});

export default ThemeContext;
