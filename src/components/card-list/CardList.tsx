import { Component } from 'react';
import Card from '../UI/card/Card';
import style from './CardList.module.scss';
import Loader from '../UI/loader/Loader';
import type { CardInfo } from '../../types';

export type CardListProps = {
  cards: CardInfo[];
  isLoading: boolean;
  errorMessage: string;
};

class CardList extends Component<CardListProps> {
  render() {
    return (
      <div className={style.card_list}>
        {this.props.errorMessage ? (
          <p>{this.props.errorMessage}</p>
        ) : this.props.isLoading ? (
          <Loader />
        ) : (
          this.props.cards.map((info) => <Card info={info} key={info.id} />)
        )}
      </div>
    );
  }
}

export default CardList;
