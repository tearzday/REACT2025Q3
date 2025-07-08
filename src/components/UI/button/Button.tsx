import { Component } from 'react';
import type { ButtonProps } from './button.type';
import classes from './Button.module.scss';

class Button extends Component<ButtonProps> {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        disabled={this.props.disabled}
        className={[this.props.className, classes.button].join(' ')}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
