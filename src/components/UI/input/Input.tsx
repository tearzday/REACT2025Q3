import { type ChangeEvent } from 'react';
import style from './Input.module.scss';

export type InputProps = {
  type: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  className?: string;
};

function Input({ type, placeholder, onChange, value, className }: InputProps) {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={[className, style.input].join(' ')}
    ></input>
  );
}

export default Input;
