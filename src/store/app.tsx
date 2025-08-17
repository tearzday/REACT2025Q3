'use client';
import { create } from 'zustand';

interface AppStore {
  currentPage: number;
  currentSearch: string | undefined;
  currentDetailsId: string | undefined;
  setCurrentPage: (value: number) => void;
  setCurrentSearch: (value: string) => void;
  setCurrentDetailsId: (value: string) => void;
}

const useAppStore = create<AppStore>()((set) => ({
  currentPage: 1,
  currentSearch: '',
  currentDetailsId: undefined,
  setCurrentPage: (value) => set(() => ({ currentPage: value })),
  setCurrentSearch: (value) => set(() => ({ currentSearch: value })),
  setCurrentDetailsId: (value) => set(() => ({ currentDetailsId: value })),
}));

export const page = (state: AppStore) => state.currentPage;
export const search = (state: AppStore) => state.currentSearch;
export const detailsId = (state: AppStore) => state.currentDetailsId;
export const changePage = (state: AppStore) => state.setCurrentPage;
export const changeSearch = (state: AppStore) => state.setCurrentSearch;
export const changeDetailsId = (state: AppStore) => state.setCurrentDetailsId;

export default useAppStore;
