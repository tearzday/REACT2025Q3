'use client';

import { Link, useRouter, usePathname } from '@/i18n/navigation';
import style from './Header.module.scss';
import { useContext } from 'react';
import { ThemeContext } from '@/context';
import ColorSwitch from '../UI/color-switch/ColorSwitch';
import Button from '../UI/button/Button';
import { useQueryClient } from '@tanstack/react-query';
import useAppStore, { detailsId, page, search } from '@/store/app';
import useGetCards from '@/hooks/useGetCards';
import useGetCardInfo from '@/hooks/useGetCardInfo';
import { useLocale, useTranslations } from 'next-intl';

function Header() {
  const { theme } = useContext(ThemeContext);
  const currentPage = useAppStore(page);
  const currentSearch = useAppStore(search);
  const currentDetailsId = useAppStore(detailsId);
  const t = useTranslations('Header');

  const { refetch: refetchGetCards } = useGetCards({
    name: currentSearch,
    page: currentPage,
  });

  const { refetch: refetchGetCardInfo } = useGetCardInfo(currentDetailsId);

  const queryClient = useQueryClient();

  const classNameLink = [
    style.link,
    theme === 'dark' ? style.link__dark : style.link__light,
  ].join(' ');

  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedLanguage = event.target.value;
    router.push(pathname, { locale: selectedLanguage });
  };

  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <ul className={style.container}>
          <Link className={classNameLink} href="/">
            {t('home')}
          </Link>
          <Link className={classNameLink} href="/about">
            {t('about')}
          </Link>
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
          {t('refresh')}
        </Button>
        <select
          className={[
            style.selector,
            theme === 'dark' ? style.selector__dark : style.selector__light,
          ].join(' ')}
          value={currentLocale}
          onChange={handleLanguageChange}
        >
          <option value="en">EN</option>
          <option value="ru">RU</option>
        </select>
      </div>
    </header>
  );
}

export default Header;
