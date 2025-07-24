import style from './Card.module.scss';
import type { CardInfo } from '@/types';
import { useNavigate, useSearchParams } from 'react-router';

export type CardProps = {
  info: CardInfo;
};

function Card({ info: { id, image, name } }: CardProps) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { card, card__img, card__title } = style;

  const checkDetails = () => {
    const pageNumber = searchParams.get('page') || '1';
    navigate(`/${id}/?page=${pageNumber}`);
  };

  return (
    <div data-testid="card-item" className={card} onClick={checkDetails}>
      <img className={card__img} src={image} alt={`Image ${name}`} />
      <h3 className={card__title}>{name}</h3>
    </div>
  );
}

export default Card;
