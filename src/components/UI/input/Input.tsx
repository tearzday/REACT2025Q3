import { useContext, type ChangeEvent } from 'react';
import style from './Input.module.scss';
import ThemeContext from '@/context';

export type InputProps = {
  type: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  className?: string;
};

function Input({ type, placeholder, onChange, value, className }: InputProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={[
        className,
        style.input,
        theme === 'dark' ? style.input__dark : style.input__light,
      ].join(' ')}
    ></input>
  );
}

export default Input;
