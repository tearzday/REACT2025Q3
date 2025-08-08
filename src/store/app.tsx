import { create } from 'zustand';

interface AppStore {
  currentPage: number | undefined;
  currentSearch: string | undefined;
  setCurrentPage: (value: number) => void;
  setCurrentSearch: (value: string) => void;
}

const getInitialPage = () => {
  const params = new URLSearchParams(window.location.search);
  return Number(params.get('page')) || 1;
};

const useAppStore = create<AppStore>()((set) => ({
  currentPage: getInitialPage(),
  currentSearch: undefined,
  setCurrentPage: (value) => set(() => ({ currentPage: value })),
  setCurrentSearch: (value) => set(() => ({ currentSearch: value })),
}));

export default useAppStore;
