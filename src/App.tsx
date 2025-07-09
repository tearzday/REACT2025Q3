import { Component } from 'react';
import CardList from './components/card-list/CardList';
import Search from './components/search/Search';
import APICard from './api/card';
import type { CardInfo } from './components/UI/card/card.type';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';

class App extends Component {
  state = {
    cards: [],
    loading: true,
    currentParams: undefined,
  };

  componentDidMount() {
    const currentParams =
      localStorage.getItem('search-character-value') ?? undefined;
    this.setState({ currentParams });

    APICard.getCards(currentParams).then((body) => {
      this.changeCards(body);
      this.changeLoading(false);
    });
  }

  changeCards = (cards: CardInfo[]) => {
    this.setState({ cards });
  };

  changeLoading = (loading: boolean) => {
    this.setState({ loading });
  };

  render() {
    return (
      <div className="app">
        <Search
          currentValue={this.state.currentParams}
          changeCards={this.changeCards}
          changeLoading={this.changeLoading}
        />
        <ErrorBoundary>
          {this.state.cards ? (
            <CardList cards={this.state.cards} isLoading={this.state.loading} />
          ) : (
            <p>Таких карточек не найдено</p>
          )}
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
