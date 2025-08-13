'use client';

import Header from '@/components/header/Header';
import style from './ErrorPage.module.scss';
import { useContext } from 'react';
import { ThemeContext } from '@/context';

function ErrorPage() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <Header />
      <div className={style.error__page}>
        <div className={style.container}>
          <h2 className={style.title}>4</h2>
          <img
            className={style.img}
            src="/img/404.png"
            alt="Rick and Morty in the teleport"
          />
          <h2 className={style.title}>4</h2>
        </div>
        <h4 className={style.subtitle}>Oops! This page doesn&apos;t exist.</h4>
      </div>
    </div>
  );
}

export default ErrorPage;
