import { type ReactNode } from 'react';
import style from './Button.module.scss';

export type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
};

function Button({ children, onClick, disabled, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={[className, style.button].join(' ')}
    >
      {children}
    </button>
  );
}

export default Button;
