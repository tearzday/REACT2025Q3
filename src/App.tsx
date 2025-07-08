import { Component } from 'react';
import CardList from './components/card-list/CardList';
import Search from './components/search/Search';
import APICard from './api/card';
import type { CardListProps } from './components/card-list/CardList.type';

class App extends Component {
  state = {
    cards: [],
  };

  componentDidMount() {
    APICard.getCards().then((body) => {
      this.setState({ cards: body });
    });
    //   {
    //     id: 0,
    //     name: 'Card name',
    //     description: 'Card description',
    //     img: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    //   },
    //   {
    //     id: 1,
    //     name: 'Card name',
    //     description: 'Card description',
    //     img: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    //   },
    //   {
    //     id: 2,
    //     name: 'Card name',
    //     description: 'Card description',
    //     img: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    //   },
    //   {
    //     id: 3,
    //     name: 'Card name',
    //     description: 'Card description',
    //     img: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    //   },
    //   {
    //     id: 4,
    //     name: 'Card name',
    //     description: 'Card description',
    //     img: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    //   },
    //   {
    //     id: 5,
    //     name: 'Card name',
    //     description: 'Card description',
    //     img: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    //   },
    // ];
  }

  changeCards(cards: CardListProps) {

     this.setState({cards});
  }

  render() {
    return (
      <div className="app">
        <Search changeCards={this.changeCards.bind(this)}/>
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
