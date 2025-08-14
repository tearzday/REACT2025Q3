'use client';

import Header from '@/components/header/Header';
import style from './about.module.scss';
import { Link } from '@/i18n/navigation';
import { useContext } from 'react';
import { ThemeContext } from '@/context';
import { useTranslations } from 'next-intl';

function AboutPage() {
  const { theme } = useContext(ThemeContext);

  const classNameLink = theme === 'dark' ? style.link__dark : style.link__light;
  const t = useTranslations('AboutPage');

  return (
    <div className={theme}>
      <Header />
      <div className={style.about__page} data-testid="about-page">
        <div className={style.card}>
          <h2>{t('author.title')}</h2>
          <p>
            <b>{t('author.name.title')}:</b> {t('author.name.value')}
          </p>
          <p>
            <b>{t('author.age.title')}:</b> 25
          </p>
          <p>
            <b>{t('author.location.title')}:</b> {t('author.name.value')}
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
            <b>{t('course.course')}: </b>
            <Link
              className={classNameLink}
              href="https://rs.school/courses/reactjs"
            >
              {t('course.event')}
            </Link>
          </p>
          <p>
            <b>{t('course.docs')}: </b>
            <Link className={classNameLink} href="https://rs.school/docs/en">
              {t('course.event')}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
