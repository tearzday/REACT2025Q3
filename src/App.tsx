import { Component } from 'react';
import Search from './components/search/Search';
import APICard from './api/card';
import type { CardInfo } from './components/UI/card/card.type';
import Main from './components/main/Main';
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
        <ErrorBoundary>
          <Search
            currentValue={this.state.currentParams}
            changeCards={this.changeCards}
            changeLoading={this.changeLoading}
          />
          <Main cards={this.state.cards} loading={this.state.loading} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
