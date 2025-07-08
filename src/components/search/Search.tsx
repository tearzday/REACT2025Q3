import { Component } from 'react';
import Input from '../UI/input/Input';
import Button from '../UI/button/Button';
import classes from './Search.module.scss';

class Search extends Component {
  render() {
    return (
      <div className={classes.search}>
        <Input
          type="text"
          placeholder="placeholder"
          className="text"
          onChange={(event) => console.log(event.target.value)}
        ></Input>
        <Button onClick={() => console.log('click')}>Search</Button>
      </div>
    );
  }
}

export default Search;
