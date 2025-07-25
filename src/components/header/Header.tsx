import { NavLink } from 'react-router';
import style from './Header.module.scss';

function Header() {
  return (
    <header className={style.header} data-testid="header">
      <nav>
        <ul className={style.container}>
          <NavLink className={style.link} to="/">
            Home
          </NavLink>
          <NavLink className={style.link} to="/about">
            About Us
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
