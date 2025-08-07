import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/style.scss';
import ErrorBoundary from './components/error-boundary/ErrorBoundary.tsx';
import App from './App.tsx';

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>
  );
}
