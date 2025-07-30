import { createBrowserRouter, RouterProvider } from 'react-router';
import router from './router/router.tsx';
import ThemeContext from './context/index.ts';
import { useState } from 'react';

const browserRouter = createBrowserRouter(router);

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <>
      <ThemeContext value={{ theme, setTheme }}>
        <RouterProvider router={browserRouter} />
      </ThemeContext>
    </>
  );
}

export default App;
