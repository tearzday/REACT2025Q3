import { Component } from 'react';
import CardList from '../card-list/CardList';
import type { CardInfo } from '../UI/card/card.type';
import Button from '../UI/button/Button';

interface MainProps {
  cards: CardInfo[];
  loading: boolean;
}

class Main extends Component<MainProps> {
  state = {
    isError: false,
  };

  render() {
    if (this.state.isError) {
      throw new Error('Error');
    }

    return (
      <main>
        {this.props.cards ? (
          <CardList cards={this.props.cards} isLoading={this.props.loading} />
        ) : (
          <p>Таких карточек не найдено</p>
        )}
        <Button onClick={() => this.setState({ isError: true })}>
          Call Error
        </Button>
      </main>
    );
  }
}

export default Main;
