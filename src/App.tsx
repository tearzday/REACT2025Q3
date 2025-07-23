import { useState } from 'react';
import Search from './components/search/Search';
import type { APIData, CardInfo, GetCards } from './types';
import Main from './components/main/Main';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import APICard from './api/card';

function App() {
  const [cards, setCards] = useState<CardInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [totalPages, setTotalPages] = useState<number>(10);
  const [name, setName] = useState<string>('');

  const getCards = async (params: GetCards) => {
    setLoading(true);
    const searchName = params.name ?? name;

    try {
      const body = {
        name: searchName,
        page: params.page || '1',
      };
      const data: APIData = await APICard.getCards(body);

      setErrorMessage('');
      setCards(data.cards);
      setTotalPages(data.total);
    } catch (e) {
      setErrorMessage(e instanceof Error ? e.message : String(e));
    } finally {
      setLoading(false);
      setName(searchName);
    }
  };

  return (
    <div className="app">
      <ErrorBoundary>
        <Search search={getCards} />
        <Main
          cards={cards}
          getCards={getCards}
          loading={loading}
          errorMessage={errorMessage}
          totalPages={totalPages}
        />
      </ErrorBoundary>
    </div>
  );
}

export default App;
