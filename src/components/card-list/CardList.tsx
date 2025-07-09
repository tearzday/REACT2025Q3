import { Component } from 'react';
import Card from '../UI/card/Card';
import classes from './CardList.module.scss';
import type { CardListProps } from './CardList.type';
import Loader from '../UI/loader/Loader';

class CardList extends Component<CardListProps> {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div className={classes.card_list}>
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
