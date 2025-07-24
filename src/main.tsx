import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import HomePage from './pages/home/HomePage.tsx';
import './styles/style.scss';
import { createBrowserRouter, RouterProvider } from 'react-router';
import ErrorBoundary from './components/error-boundary/ErrorBoundary.tsx';
import ErrorPage from './pages/error/ErrorPage.tsx';
import AboutUsPage from './pages/about-us/AboutUsPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutUsPage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </StrictMode>
  );
}
