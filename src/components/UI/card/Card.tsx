import style from './Card.module.scss';
import type { CardInfo } from '@/types';
import { useNavigate, useSearchParams } from 'react-router';
import { type MouseEvent } from 'react';
import Checkbox from '../checkbox/Checkbox';
import useSelectedItems from '@/store/selectedItems';

export type CardProps = {
  info: CardInfo;
};

function Card({ info }: CardProps) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { card, card__img, card__info, card__title } = style;

  const addItem = useSelectedItems((state) => state.addItem);
  const deleteItem = useSelectedItems((state) => state.deleteItem);

  const checkDetails = (e: MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    e.stopPropagation();

    if (target.tagName !== 'INPUT') {
      const pageNumber = searchParams.get('page') || '1';
      navigate(`details/${info.id}/?page=${pageNumber}`);
    }
  };

  return (
    <div data-testid="card-item" className={card} onClick={checkDetails}>
      <img className={card__img} src={info.image} alt={`Image ${name}`} />
      <div className={card__info}>
        <h3 className={card__title}>{info.name}</h3>
        <Checkbox
          onChecked={() => {
            addItem(info);
          }}
          onUnchecked={() => {
            deleteItem(info.id);
          }}
        />
      </div>
    </div>
  );
}

export default Card;
