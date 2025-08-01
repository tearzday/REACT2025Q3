import useSelectedItems from '@/store/selectedItems';
import Button from '../UI/button/Button';
import style from './ItemsPanel.module.scss';
import { useRef, useState } from 'react';

function ItemsPanel() {
  const [downloadUrl, setDownloadUrl] = useState('');
  const downloadRef = useRef<HTMLAnchorElement | null>(null);

  const itemsCount = useSelectedItems((state) => state.itemsCount);
  const clear = useSelectedItems((state) => state.clear);
  const items = useSelectedItems((state) => state.items);

  const handleDownload = () => {
    const content = items.map(
      (item, index) =>
        `${index + 1}. ${item.name}, ${item.gender}, ${item.species}, ${item.status}\n`
    );
    const blob = new Blob(content, { type: 'text/csv;charset=utf-8' });

    const url = URL.createObjectURL(blob);

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
    <div className={style.panel}>
      <h4 className={style.panel__title}>{itemsCount} items are selected</h4>
      <div className={style.panel__controllers}>
        <Button className={style.panel__btn} onClick={clear}>
          Unselect all
        </Button>
        <Button className={style.panel__btn} onClick={handleDownload}>
          Download
        </Button>
        <a
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
