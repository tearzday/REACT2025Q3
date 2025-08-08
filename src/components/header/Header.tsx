import { NavLink } from 'react-router';
import style from './Header.module.scss';
import { useContext } from 'react';
import ThemeContext from '@/context';
import ColorSwitch from '../UI/color-switch/ColorSwitch';
import Button from '../UI/button/Button';
import { useQueryClient } from '@tanstack/react-query';

function Header() {
  const { theme } = useContext(ThemeContext);

  const queryClient = useQueryClient();

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
      <div className={style.controller}>
        <ColorSwitch />
        <Button
          className={style.controller__btn}
          onClick={() => {
            queryClient.clear();
          }}
        >
          Clear cache
        </Button>
      </div>
    </header>
  );
}

export default Header;
