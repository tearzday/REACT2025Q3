import { useContext, useState, type ChangeEvent } from 'react';
import style from './Checkbox.module.scss';
import ThemeContext from '@/context';

interface CheckboxProps {
  onChecked: () => void;
  onUnchecked: () => void;
  checked?: boolean;
}

function Checkbox({ checked, onChecked, onUnchecked }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(!!checked);

  console.log(isChecked);
  const { theme } = useContext(ThemeContext);

  const checkboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const currenIsChecked = !isChecked;
    setIsChecked(currenIsChecked);

    if (currenIsChecked) {
      onChecked();
    } else {
      onUnchecked();
    }
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
