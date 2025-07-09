import { Component } from 'react';
import type { InputProps } from './input.type';
import classes from './Input.module.scss';

class Input extends Component<InputProps> {
  render() {
    return (
      <input
        type={this.props.type}
        value={this.props.value}
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
        className={[this.props.className, classes.input].join(' ')}
      ></input>
    );
  }
}

export default Input;
