import { useContext } from 'react';
import style from './ColorSwitch.module.scss';
import { ThemeContext } from '@/context';

function ColorSwitch() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleThem = () => {
    const newThem = theme === 'dark' ? 'light' : 'dark';
    setTheme(newThem);
  };

  return (
    <div
      className={style.color__switch}
      onClick={toggleThem}
      data-testid="color-switch"
    >
      <img
        src={
          theme === 'dark'
            ? '/img/icons/dark_mode.svg'
            : '/img/icons/light_mode.svg'
        }
      />
    </div>
  );
}

export default ColorSwitch;
