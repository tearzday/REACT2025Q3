'use client';

import { useEffect, useState } from 'react';
import style from './details.module.scss';
import Loader from '@/components/UI/loader/Loader';
import useGetCardInfo from '@/hooks/useGetCardInfo';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useSearchParams } from 'next/navigation';

type DetailsProps = {
  id: string;
};

function Details({ id }: DetailsProps) {
  const searchParams = useSearchParams();

  const [height, setHeight] = useState('calc(100svh - 97.4px)');

  const { data: info, isLoading, error } = useGetCardInfo(id);
  const t = useTranslations('Details');
  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
      setHeight('100vh');
    } else {
      setHeight('calc(100svh - 97.4px)');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={style.details__page} data-testid="details-page">
      <div className={style.info} style={{ height }} data-testid="details-info">
        {isLoading && <Loader />}
        {info && (
          <>
            <Image
              className={style.img}
              src={info.image}
              alt={`Image ${info.name}`}
              width="300"
              height="300"
            />
            <div className={style.info__text} data-testid="details-info-text">
              <h2 className={style.title}>{info.name}</h2>
              <p className={style.subtitle}>
                <b>{t('status')}:</b> {info.status}
              </p>
              <p className={style.subtitle}>
                <b>{t('species')}:</b> {info.species}
              </p>
              <p className={style.subtitle}>
                <b>{t('gender')}:</b> {info.gender}
              </p>
              <p className={style.subtitle}>
                <b>{t('location')}:</b>{' '}
                {info.location ? info.location.name : '-'}
              </p>
              <Link
                className={style.btn}
                href={{
                  pathname: '/',
                  query: { page: searchParams.get('page') || '1' },
                }}
              >
                {t('btn')}
              </Link>
            </div>
          </>
        )}

        {error && (
          <div className={style.info__text}>
            <p className={style.error}>{error.message}</p>{' '}
            <Link
              href={{
                pathname: '/',
                query: { page: searchParams.get('page') || '1' },
              }}
              className={style.btn}
            >
              {t('btn')}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Details;
