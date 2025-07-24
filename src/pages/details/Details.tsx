import { useEffect, useState } from 'react';
import style from './Details.module.scss';
import APICard from '@/api/card';
import { useNavigate, useParams } from 'react-router';
import type { CardInfo } from '@/types';
import Loader from '@/components/UI/loader/Loader';
import Button from '@/components/UI/button/Button';

function DetailsPage() {
  const navigate = useNavigate();
  const { cardId } = useParams();
  const [info, setInfo] = useState<CardInfo>();

  useEffect(() => {
    APICard.getCardInfo(Number(cardId)).then((body) => {
      setInfo(body);
      console.log(body);
    });
  }, [cardId]);

  const closeDetails = () => {
    navigate('/');
  };

  return (
    <div className={style.details__page} data-testid="details-page">
      {info ? (
        <div className={style.info}>
          <img
            className={style.img}
            src={info.image}
            alt={`Image ${info.name}`}
          />
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
            <b>Location:</b> {info.location.name}
          </p>
          <Button onClick={closeDetails} className={style.btn}>
            Close
          </Button>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default DetailsPage;
