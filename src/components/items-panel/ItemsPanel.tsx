import useSelectedItems from '@/store/selectedItems';
import Button from '../UI/button/Button';
import style from './ItemsPanel.module.scss';

function ItemsPanel() {
  const itemsCount = useSelectedItems((state) => state.itemsCount);
  const clear = useSelectedItems((state) => state.clear);
  const items = useSelectedItems((state) => state.items);

  return (
    <div className={style.panel}>
      <h4 className={style.panel__title}>{itemsCount} items are selected</h4>
      <div className={style.panel__controllers}>
        <Button className={style.panel__btn} onClick={clear}>
          Unselect all
        </Button>
        <Button
          className={style.panel__btn}
          onClick={() => {
            console.log(items);
          }}
        >
          Download
        </Button>
      </div>
    </div>
  );
}

export default ItemsPanel;
