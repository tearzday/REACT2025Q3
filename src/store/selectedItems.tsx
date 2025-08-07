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
  addItem: (item) =>
    set((state) => ({
      items: [...state.items, item],
    })),
  deleteItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
  clear: () => set(() => ({ items: [], itemsCount: 0 })),
}));

export const selectedItems = (state: SelectedItemsState) => state.items;
export const selectItemsCount = (state: SelectedItemsState) =>
  state.items.length;
export const addSelectedItem = (state: SelectedItemsState) => state.addItem;
export const deleteSelectedItem = (state: SelectedItemsState) =>
  state.deleteItem;
export const clearSelectedItem = (state: SelectedItemsState) => state.clear;

export default useSelectedItems;
