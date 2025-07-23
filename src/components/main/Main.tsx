import { Component } from 'react';
import CardList from '../card-list/CardList';
import type { CardInfo } from '@/types';
import style from './Main.module.scss';

interface MainProps {
  cards: CardInfo[];
  loading: boolean;
  errorMessage: string;
}

class Main extends Component<MainProps> {
  render() {
    return (
      <main className={style.main} data-testid="main">
        <CardList
          cards={this.props.cards}
          isLoading={this.props.loading}
          errorMessage={this.props.errorMessage}
        />
      </main>
    );
  }
}

export default Main;
