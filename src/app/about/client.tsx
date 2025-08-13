'use client';

import Header from '@/components/header/Header';
import style from './about.module.scss';
import Link from 'next/link';
import { useContext } from 'react';
import ThemeContext from '@/context';

function AboutPage() {
  const { theme } = useContext(ThemeContext);

  const classNameLink = theme === 'dark' ? style.link__dark : style.link__light;

  return (
    <div className={theme}>
      <Header />
      <div className={style.about__page} data-testid="about-page">
        <div className={style.card}>
          <h2>About us</h2>
          <p>
            <b>Name:</b> Daniil
          </p>
          <p>
            <b>Year:</b> 25
          </p>
          <p>
            <b>Location:</b> Saint-Petersburg
          </p>
          <p>
            <b>GitHub:</b>{' '}
            <Link className={classNameLink} href="https://github.com/tearzday">
              tearzday
            </Link>
          </p>
        </div>
        <div className={style.card}>
          <h2>RS School</h2>
          <p>
            <b>Course:</b>{' '}
            <Link
              className={classNameLink}
              href="https://rs.school/courses/reactjs"
            >
              Click
            </Link>
          </p>
          <p>
            <b>Docs:</b>{' '}
            <Link className={classNameLink} href="https://rs.school/docs/en">
              Click
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
