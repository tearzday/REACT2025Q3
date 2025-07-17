import { Component } from 'react';
import style from './Card.module.scss';
import type { CardInfo } from '@/types';

export type CardProps = {
  info: CardInfo;
};

class Card extends Component<CardProps> {
  render() {
    const { card, card__img, card__title, card__subtitle } = style;
    return (
      <div data-testid="card-item" className={card}>
        <img
          className={card__img}
          src={this.props.info.image}
          alt={`Image ${this.props.info.name}`}
        />
        <h3 className={card__title}>{this.props.info.name}</h3>
        <h4 className={card__subtitle}>Species: {this.props.info.species}</h4>
        <h4 className={card__subtitle}>Gender: {this.props.info.gender}</h4>
      </div>
    );
  }
}

export default Card;
