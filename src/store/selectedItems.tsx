import type { CardInfo } from '@/types';
import { create } from 'zustand';

interface SelectedItemsState {
  items: Array<CardInfo>;
  addItem: (item: CardInfo) => void;
  deleteItem: (id: number) => void;
  clear: () => void;
}

const useSelectedItems = create<SelectedItemsState>()((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  deleteItem: (id) =>
    set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
  clear: () => set(() => ({ items: [] })),
}));

export default useSelectedItems;
