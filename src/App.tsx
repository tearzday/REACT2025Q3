import { useState } from 'react';
import Search from './components/search/Search';
import type { CardInfo } from './types';
import Main from './components/main/Main';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';

function App() {
  const [cards, setCards] = useState<CardInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');

  return (
    <div className="app">
      <ErrorBoundary>
        <Search
          changeCards={setCards}
          changeLoading={setLoading}
          changeErrorMessage={setErrorMessage}
        />
        <Main cards={cards} loading={loading} errorMessage={errorMessage} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
