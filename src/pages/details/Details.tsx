import { useEffect, useState } from 'react';
import style from './Details.module.scss';
import { useNavigate, useParams, useSearchParams } from 'react-router';
import Loader from '@/components/UI/loader/Loader';
import Button from '@/components/UI/button/Button';
import useGetCardInfo from '@/hooks/useGetCardInfo';
import useAppStore from '@/store/app';

function DetailsPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { cardId } = useParams();
  const [height, setHeight] = useState('calc(100svh - 97.4px)');
  const setCurrentDetailsId = useAppStore((state) => state.setCurrentDetailsId);

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
    navigate(`/?page=${searchParams.get('page')}`);
  };

  return (
    <div className={style.details__page} data-testid="details-page">
      <div className={style.info} style={{ height }} data-testid="details-info">
        {isLoading && <Loader />}
        {info && (
          <>
            <img
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

export default DetailsPage;
