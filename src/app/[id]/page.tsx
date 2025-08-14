'use client';

import { useEffect, useState } from 'react';
import style from './details.module.scss';
import Loader from '@/components/UI/loader/Loader';
import Button from '@/components/UI/button/Button';
import useGetCardInfo from '@/hooks/useGetCardInfo';
import useAppStore, { changeDetailsId } from '@/store/app';
import { useRouter, useSearchParams, useParams } from 'next/navigation';
import Image from 'next/image';

function DetailsClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useParams<{ id: string }>();
  const cardId = params?.id;

  const [height, setHeight] = useState('calc(100svh - 97.4px)');
  const setCurrentDetailsId = useAppStore(changeDetailsId);

  if (cardId) {
    setCurrentDetailsId(cardId);
  }

  const { data: info, isLoading, error } = useGetCardInfo(cardId || '1');

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

  const closeDetails = () => {
    router.push(`/?page=${searchParams?.get('page')}`);
  };

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
            />
            <div className={style.info__text} data-testid="details-info-text">
              <h2 className={style.title}>{info.name}</h2>
              <p className={style.subtitle}>
                <b>Status:</b> {info.status}
              </p>
              <p className={style.subtitle}>
                <b>Species:</b> {info.species}
              </p>
              <p className={style.subtitle}>
                <b>Gender:</b> {info.gender}
              </p>
              <p className={style.subtitle}>
                <b>Location:</b> {info.location ? info.location.name : '-'}
              </p>
              <Button onClick={closeDetails} className={style.btn}>
                Close
              </Button>
            </div>
          </>
        )}

        {error && (
          <div className={style.info__text}>
            <p className={style.error}>{error.message}</p>{' '}
            <Button onClick={closeDetails} className={style.btn}>
              Close
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default DetailsClient;
