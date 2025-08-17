'use client';

import { useContext } from 'react';
import style from './ColorSwitch.module.scss';
import { ThemeContext } from '@/context';
import Image from 'next/image';

function ColorSwitch() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleThem = () => {
    const newThem = theme === 'dark' ? 'light' : 'dark';
    setTheme(newThem);
  };

  return (
    <div className={style.color__switch} onClick={toggleThem}>
      <Image
        src={
          theme === 'dark'
            ? '/img/icons/dark_mode.svg'
            : '/img/icons/light_mode.svg'
        }
        alt="Theme icon"
        width="25"
        height="25"
      />
    </div>
  );
}

export default ColorSwitch;
