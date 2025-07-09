import { Component } from 'react';
import CardList from './components/card-list/CardList';
import Search from './components/search/Search';
import APICard from './api/card';
import type { CardInfo } from './components/UI/card/card.type';

class App extends Component {
  state = {
    cards: [],
    loading: true,
  };

  componentDidMount() {
    APICard.getCards().then((body) => {
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
          changeCards={this.changeCards}
          changeLoading={this.changeLoading}
        />
        <CardList cards={this.state.cards} isLoading={this.state.loading} />
      </div>
    );
  }
}

export default App;
