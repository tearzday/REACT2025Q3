'use client';

import useSelectedItems, {
  clearSelectedItem,
  selectedItems,
  selectItemsCount,
} from '@/store/selectedItems';
import Button from '../UI/button/Button';
import style from './ItemsPanel.module.scss';
import { useRef } from 'react';
import getCSV from '@/app/api/getCSV';
import { Link } from '@/i18n/navigation';

function ItemsPanel() {
  const downloadRef = useRef<HTMLAnchorElement | null>(null);

  const items = useSelectedItems(selectedItems);
  const itemsCount = useSelectedItems(selectItemsCount);
  const clearItems = useSelectedItems(clearSelectedItem);

  const handleDownload = async () => {
    const file = await getCSV(items);
    if (!file) return;

    const url = URL.createObjectURL(file);

    if (downloadRef.current) {
      downloadRef.current.href = url;
      downloadRef.current.download = `${itemsCount}_items.csv`;
      downloadRef.current.click();

      setTimeout(() => URL.revokeObjectURL(url), 1000);
    }
  };

  return (
    <div className={style.panel}>
      <h4 className={style.panel__title}>{itemsCount} items are selected</h4>
      <div className={style.panel__controllers}>
        <Button className={style.panel__btn} onClick={clearItems}>
          Unselect all
        </Button>
        <Button className={style.panel__btn} onClick={handleDownload}>
          Download
        </Button>
        <Link
          role="link"
          ref={downloadRef}
          href=""
          className={style.blob__link}
          download={`${itemsCount}_items.csv`}
        />
      </div>
    </div>
  );
}

export default ItemsPanel;
