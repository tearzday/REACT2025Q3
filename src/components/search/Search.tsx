import { Component } from 'react';
import Input from '../UI/input/Input';
import Button from '../UI/button/Button';
import classes from './Search.module.scss';
import APICard from '../../api/card';
import type { SearchProps } from './Search.type';

class Search extends Component<SearchProps> {
  state = {
    value: '',
  };

  async searchCards() {
    this.props.changeLoading(true);
    const cards = await APICard.getCards(this.state.value);

    this.props.changeCards(cards);
    this.props.changeLoading(false);
  }

  render() {
    return (
      <div className={classes.search}>
        <Input
          type="text"
          placeholder="placeholder"
          className="text"
          onChange={(event) => this.setState({ value: event.target.value })}
        ></Input>
        <Button onClick={this.searchCards.bind(this)}>Search</Button>
      </div>
    );
  }
}

export default Search;
