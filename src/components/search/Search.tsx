import { Component } from 'react';
import Input from '../UI/input/Input';
import Button from '../UI/button/Button';
import style from './Search.module.scss';
import APICard from '../../api/card';
import type { CardInfo } from '../../types';

export type SearchProps = {
  currentValue?: string;
  changeErrorMessage: (message: string) => void;
  changeCards: (cards: CardInfo[]) => void;
  changeLoading: (loading: boolean) => void;
};

class Search extends Component<SearchProps> {
  state = {
    value: '',
  };

  componentDidMount() {
    this.setState({
      value: localStorage.getItem('search-character-value') ?? undefined,
    });
  }

  searchCards = async () => {
    this.props.changeLoading(true);

    try {
      const cards = await APICard.getCards(this.state.value);
      this.props.changeErrorMessage('');
      this.props.changeCards(cards);
    } catch (e) {
      this.props.changeErrorMessage(e instanceof Error ? e.message : String(e));
    } finally {
      localStorage.setItem('search-character-value', this.state.value);
      this.props.changeLoading(false);
    }
  };

  render() {
    return (
      <div className={style.search}>
        <Input
          type="text"
          placeholder="What are you looking for?"
          value={this.state.value}
          onChange={(event) => this.setState({ value: event.target.value })}
        ></Input>
        <Button onClick={this.searchCards}>Search</Button>
      </div>
    );
  }
}

export default Search;
