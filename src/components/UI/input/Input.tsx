import { Component } from 'react';
import type { InputProps } from './input.type';

class Input extends Component<InputProps> {
  render() {
    return (
      <input
        type={this.props.type}
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
      ></input>
    );
  }
}

export default Input;
