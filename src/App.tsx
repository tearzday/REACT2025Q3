import { Component } from 'react';
import Search from './components/search/Search';
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

  changeCards = (cards: CardInfo[]) => {
    this.setState({ cards });
  };

  changeLoading = (loading: boolean) => {
    this.setState({ loading });
  };

  changeMessage = (errorMessage: string) => {
    this.setState({ errorMessage });
  };

  render() {
    return (
      <div className="app">
        <ErrorBoundary>
          <Search
            currentValue={this.state.currentParams}
            changeCards={this.changeCards}
            changeLoading={this.changeLoading}
            changeErrorMessage={this.changeMessage}
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
