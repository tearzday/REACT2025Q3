import { NavLink } from 'react-router';
import style from './Header.module.scss';
import { useContext } from 'react';
import ThemeContext from '@/context';
import ColorSwitch from '../UI/color-switch/ColorSwitch';

function Header() {
  const { theme } = useContext(ThemeContext);

  const classNameLink = [
    style.link,
    theme === 'dark' ? style.link__dark : style.link__light,
  ].join(' ');

  return (
    <header className={style.header} data-testid="header">
      <nav className={style.nav}>
        <ul className={style.container}>
          <NavLink className={classNameLink} to="/">
            Home
          </NavLink>
          <NavLink className={classNameLink} to="/about">
            About Us
          </NavLink>
        </ul>
      </nav>
      <ColorSwitch />
    </header>
  );
}

export default Header;
