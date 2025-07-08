import { Component } from 'react';
import classes from './Card.module.scss';
import type { CardProps } from './card.type';

class Card extends Component<CardProps> {
  render() {
    return (
      <div className={classes.card}>
        <img
          className={classes.card__img}
          src={this.props.info.img}
          alt={`Image ${this.props.info.name}`}
        />
        <h3 className={classes.card__name}>{this.props.info.name}</h3>
        <h4 className={classes.card__description}>
          {this.props.info.description}
        </h4>
      </div>
    );
  }
}

export default Card;
