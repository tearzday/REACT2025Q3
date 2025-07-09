import { Component, type ChangeEvent } from 'react';
import classes from './Input.module.scss';

export type InputProps = {
  type: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  className?: string;
};

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
