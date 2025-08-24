import { create } from 'zustand';
import type { FormData } from '../types';

interface FormsState {
  data: FormData[];
  setData: (newData: FormData) => void;
}

export const useForms = create<FormsState>((set) => ({
  data: [],
  setData: (newData: FormData) =>
    set((state) => ({ data: [newData, ...state.data] })),
}));

export const formsGetData = (state: FormsState) => state.data;
export const formsSetData = (state: FormsState) => state.setData;
