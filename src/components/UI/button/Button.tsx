import { Component, type ReactNode } from 'react';
import style from './Button.module.scss';

export type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
};

class Button extends Component<ButtonProps> {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        disabled={this.props.disabled}
        className={[this.props.className, style.button].join(' ')}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
