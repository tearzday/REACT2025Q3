import { NavLink } from 'react-router';
import style from './Header.module.scss';
import { useContext } from 'react';
import ThemeContext from '@/context';
import ColorSwitch from '../UI/color-switch/ColorSwitch';
import Button from '../UI/button/Button';
import { useQueryClient } from '@tanstack/react-query';
import useAppStore from '@/store/app';
import useGetCards from '@/hooks/useGetCards';
import useGetCardInfo from '@/hooks/useGetCardInfo';

function Header() {
  const { theme } = useContext(ThemeContext);
  const currentPage = useAppStore((state) => state.currentPage);
  const currentSearch = useAppStore((state) => state.currentSearch);
  const currentDetailsId = useAppStore((state) => state.currentDetailsId);

  const { refetch: refetchGetCards } = useGetCards({
    name: currentSearch,
    page: String(currentPage),
  });

  const { refetch: refetchGetCardInfo } = useGetCardInfo(currentDetailsId);

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
            refetchGetCards();
            refetchGetCardInfo();
          }}
        >
          Refresh
        </Button>
      </div>
    </header>
  );
}

export default Header;
