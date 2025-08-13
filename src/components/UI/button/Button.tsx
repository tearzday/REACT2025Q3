import { useContext, type ReactNode } from 'react';
import style from './Button.module.scss';
import { ThemeContext } from '@/context';

export type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
};

function Button({ children, onClick, disabled, className }: ButtonProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={[
        className,
        style.button,
        theme === 'dark' ? style.button__dark : style.button__light,
      ].join(' ')}
    >
      {children}
    </button>
  );
}

export default Button;
