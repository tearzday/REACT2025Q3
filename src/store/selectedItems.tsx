import type { CardInfo } from '@/types';
import { create } from 'zustand';

interface SelectedItemsState {
  items: Array<CardInfo>;
  itemsCount: number;
  addItem: (item: CardInfo) => void;
  deleteItem: (id: number) => void;
  clear: () => void;
}

const useSelectedItems = create<SelectedItemsState>()((set) => ({
  items: [],
  itemsCount: 0,
  addItem: (item) =>
    set((state) => ({
      items: [...state.items, item],
      itemsCount: state.itemsCount + 1,
    })),
  deleteItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
      itemsCount: state.itemsCount - 1,
    })),
  clear: () => set(() => ({ items: [], itemsCount: 0 })),
}));

export default useSelectedItems;
