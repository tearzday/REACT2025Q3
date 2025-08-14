'use client';

import Header from '@/components/header/Header';
import style from './ErrorPage.module.scss';
import { useContext } from 'react';
import { ThemeContext } from '@/context';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

function ErrorPage() {
  const { theme } = useContext(ThemeContext);
  const t = useTranslations('404');

  return (
    <div className={theme}>
      <Header />
      <div className={style.error__page}>
        <div className={style.container}>
          <h2 className={style.title}>4</h2>
          <Image
            className={style.img}
            src="/img/404.png"
            alt="Rick and Morty in the teleport"
          />
          <h2 className={style.title}>4</h2>
        </div>
        <h4 className={style.subtitle}>{t('text')}</h4>
      </div>
    </div>
  );
}

export default ErrorPage;
