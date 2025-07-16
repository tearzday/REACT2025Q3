import { Component } from 'react';
import Card from '../UI/card/Card';
import style from './CardList.module.scss';
import Loader from '../UI/loader/Loader';
import type { CardInfo } from '@/types';

export type CardListProps = {
  cards: CardInfo[];
  isLoading: boolean;
  errorMessage: string;
};

class CardList extends Component<CardListProps> {
  render() {
    if (this.props.errorMessage) {
      return <p className={style.error}>{this.props.errorMessage}</p>;
    }

    if (!this.props.cards.length) {
      return <p className={style.error}>No results</p>;
    }

    return (
      <div className={style.card__list}>
        {this.props.isLoading ? (
          <Loader />
        ) : (
          this.props.cards.map((info) => <Card info={info} key={info.id} />)
        )}
      </div>
    );
  }
}

export default CardList;
