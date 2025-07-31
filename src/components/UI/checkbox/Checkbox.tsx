import { useContext, type ChangeEvent } from 'react';
import style from './Checkbox.module.scss';
import ThemeContext from '@/context';

interface CheckboxProps {
  onChange: () => void;
  checked?: boolean;
}

function Checkbox({ checked, onChange }: CheckboxProps) {
  const { theme } = useContext(ThemeContext);

  const checkboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    onChange();
  };

  return (
    <input
      type="checkbox"
      className={[
        style.checkbox,
        theme === 'dark' ? style.checkbox__dark : style.checkbox__light,
      ].join(' ')}
      checked={checked}
      onChange={checkboxChange}
    />
  );
}

export default Checkbox;
