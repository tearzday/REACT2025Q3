'use client';

import useSelectedItems, {
  clearSelectedItem,
  selectedItems,
  selectItemsCount,
} from '@/store/selectedItems';
import Button from '../UI/button/Button';
import style from './ItemsPanel.module.scss';
import { useRef, useState } from 'react';
import getCSV from '@/app/api/getCSV';

function ItemsPanel() {
  const [downloadUrl, setDownloadUrl] = useState('');
  const downloadRef = useRef<HTMLAnchorElement | null>(null);

  const items = useSelectedItems(selectedItems);
  const itemsCount = useSelectedItems(selectItemsCount);
  const clearItems = useSelectedItems(clearSelectedItem);

  const handleDownload = async () => {
    const file = await getCSV(items);
    if (!file) return;

    const url = URL.createObjectURL(file);

    setDownloadUrl(url);

    setTimeout(() => {
      const ref = downloadRef.current;
      if (ref) {
        ref.click();
        URL.revokeObjectURL(url);
        setDownloadUrl('');
      }
    }, 0);
  };

  return (
    <div className={style.panel} data-testid="items-panel">
      <h4 className={style.panel__title}>{itemsCount} items are selected</h4>
      <div className={style.panel__controllers}>
        <Button className={style.panel__btn} onClick={clearItems}>
          Unselect all
        </Button>
        <Button className={style.panel__btn} onClick={handleDownload}>
          Download
        </Button>
        <a
          role="link"
          ref={downloadRef}
          href={downloadUrl}
          className={style.blob__link}
          download={`${itemsCount}_items.csv`}
        />
      </div>
    </div>
  );
}

export default ItemsPanel;
