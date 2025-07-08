import { Component } from 'react';
import Card from '../UI/card/Card';
import classes from './CardList.module.scss';
import type { CardListProps } from './CardList.type';

class CardList extends Component<CardListProps> {
  //   cardInfo = [
  //     {
  //       id: 0,
  //       name: 'Card name',
  //       description: 'Card description',
  //       img: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  //     },
  //     {
  //       id: 1,
  //       name: 'Card name',
  //       description: 'Card description',
  //       img: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  //     },
  //     {
  //       id: 2,
  //       name: 'Card name',
  //       description: 'Card description',
  //       img: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  //     },
  //     {
  //       id: 3,
  //       name: 'Card name',
  //       description: 'Card description',
  //       img: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  //     },
  //     {
  //       id: 4,
  //       name: 'Card name',
  //       description: 'Card description',
  //       img: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  //     },
  //     {
  //       id: 5,
  //       name: 'Card name',
  //       description: 'Card description',
  //       img: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  //     },
  //   ];

  render() {
    return (
      <div className={classes.card_list}>
        {this.props.cards.map((info) => (
          <Card info={info} key={info.id} />
        ))}
      </div>
    );
  }
}

export default CardList;
