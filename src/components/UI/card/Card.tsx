import { Component } from 'react';
import classes from './Card.module.scss';
import type { CardInfo } from '../../../types';

export type CardProps = {
  info: CardInfo;
};

class Card extends Component<CardProps> {
  render() {
    return (
      <div className={classes.card}>
        <img
          className={classes.card__img}
          src={this.props.info.image}
          alt={`Image ${this.props.info.name}`}
        />
        <h3 className={classes.card__title}>{this.props.info.name}</h3>
        <h4 className={classes.card__subtitle}>
          Species: {this.props.info.species}
        </h4>
        <h4 className={classes.card__subtitle}>
          Gender: {this.props.info.gender}
        </h4>
      </div>
    );
  }
}

export default Card;
