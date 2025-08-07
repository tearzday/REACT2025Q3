import { create } from 'zustand';

interface AppStore {
  currentPage: number;
  currentSearch: string;
  setCurrentPage: (value: number) => void;
  setCurrentSearch: (value: string) => void;
}

const useAppStore = create<AppStore>()((set) => ({
  currentPage: 1,
  currentSearch: '',
  setCurrentPage: (value) => set(() => ({ currentPage: value })),
  setCurrentSearch: (value) => set(() => ({ currentSearch: value })),
}));

export default useAppStore;
