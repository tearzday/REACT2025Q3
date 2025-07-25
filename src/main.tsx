import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/style.scss';
import { createBrowserRouter, RouterProvider } from 'react-router';
import ErrorBoundary from './components/error-boundary/ErrorBoundary.tsx';
import router from './router/router.tsx';

const root = document.getElementById('root');
const browserRouter = createBrowserRouter(router);

if (root) {
  createRoot(root).render(
    <StrictMode>
      <ErrorBoundary>
        <RouterProvider router={browserRouter} />
      </ErrorBoundary>
    </StrictMode>
  );
}
