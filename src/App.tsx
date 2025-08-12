import { createBrowserRouter, RouterProvider } from 'react-router';
import router from './router/router.tsx';
import ThemeContext from './context/index.ts';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ErrorBoundary from './components/error-boundary/ErrorBoundary.tsx';

const browserRouter = createBrowserRouter(router);

const queryClient = new QueryClient();

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ThemeContext value={{ theme, setTheme }}>
          <RouterProvider router={browserRouter} />
        </ThemeContext>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
