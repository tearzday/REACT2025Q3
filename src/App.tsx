import { Component } from 'react';
import CardList from './components/card-list/CardList';
import Search from './components/search/Search';
import APICard from './api/card';

class App extends Component {
  state = {
    carts: [],
  };

  componentDidMount() {
    //this.setState(APICard.getCards())
    APICard.getCards().then((body) => {
      //console.log(body)
      this.setState({ carts: body });
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

  render() {
    return (
      <div className="app">
        <Search />
        <CardList carts={this.state.carts} />
      </div>
    );
  }
}

export default App;
