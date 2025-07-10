import { Component } from 'react';
import CardList from '../card-list/CardList';
import Button from '../UI/button/Button';
import type { CardInfo } from '../../types';
import style from './Main.module.scss';

interface MainProps {
  cards: CardInfo[];
  loading: boolean;
  errorMessage: string;
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
      <main className={style.main}>
        <CardList
          cards={this.props.cards}
          isLoading={this.props.loading}
          errorMessage={this.props.errorMessage}
        />
        <Button onClick={() => this.setState({ isError: true })}>
          Call Error
        </Button>
      </main>
    );
  }
}

export default Main;
