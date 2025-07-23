import style from './Card.module.scss';
import type { CardInfo } from '@/types';

export type CardProps = {
  info: CardInfo;
};

function Card({ info: { image, name, species, gender } }: CardProps) {
  const { card, card__img, card__title, card__subtitle } = style;

  return (
    <div data-testid="card-item" className={card}>
      <img className={card__img} src={image} alt={`Image ${name}`} />
      <h3 className={card__title}>{name}</h3>
      <h4 className={card__subtitle}>Species: {species}</h4>
      <h4 className={card__subtitle}>Gender: {gender}</h4>
    </div>
  );
}

export default Card;
