import { Component } from 'react';
import Search from './components/search/Search';
import APICard from './api/card';
import type { CardInfo } from './types';
import Main from './components/main/Main';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';

class App extends Component {
  state = {
    cards: [],
    loading: true,
    currentParams: undefined,
    errorMessage: '',
  };

  async componentDidMount() {
    const currentParams =
      localStorage.getItem('search-character-value') ?? undefined;
    this.setState({ currentParams });

    try {
      const cards = await APICard.getCards(currentParams);
      this.changeCards(cards);
    } catch (e) {
      this.setState({
        errorMessage: e instanceof Error ? e.message : String(e),
      });
    } finally {
      this.changeLoading(false);
    }
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
            changeErrorMessage={(message) => {
              this.setState({ errorMessage: message });
            }}
          />
          <Main
            cards={this.state.cards}
            loading={this.state.loading}
            errorMessage={this.state.errorMessage}
          />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
