import style from './Card.module.scss';
import type { CardInfo } from '@/types';
// import { useNavigate, useSearchParams } from 'react-router';
import { type MouseEvent } from 'react';
import Checkbox from '../checkbox/Checkbox';
import useSelectedItems, {
  addSelectedItem,
  deleteSelectedItem,
  selectedItems,
} from '@/store/selectedItems';
import { useRouter, useSearchParams } from 'next/navigation';

export type CardProps = {
  info: CardInfo;
};

function Card({ info }: CardProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const items = useSelectedItems(selectedItems);
  const addItem = useSelectedItems(addSelectedItem);
  const deleteItem = useSelectedItems(deleteSelectedItem);

  const { card, card__img, card__info, card__title } = style;

  const isChecked = items.some((item) => item.id === info.id);

  const checkDetails = (e: MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    e.stopPropagation();

    if (target.tagName !== 'INPUT' && searchParams) {
      const pageNumber = searchParams.get('page') || '1';
      router.push(`details/${info.id}/?page=${pageNumber}`);
    }
  };

  return (
    <div data-testid="card-item" className={card} onClick={checkDetails}>
      <img className={card__img} src={info.image} alt={`Image ${info.name}`} />
      <div className={card__info}>
        <h3 className={card__title}>{info.name}</h3>
        <Checkbox
          checked={isChecked}
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
