import { create } from 'zustand';
import type { FormData } from '@/types';
import { countries } from '@/data/countries';

interface FormsState {
  countries: string[];
  data: FormData[];
  setData: (newData: FormData) => void;
}

export const useForms = create<FormsState>((set) => ({
  countries: countries,
  data: [],
  setData: (newData: FormData) =>
    set((state) => ({ data: [newData, ...state.data] })),
}));

export const formsGetCountries = (state: FormsState) => state.countries;
export const formsGetData = (state: FormsState) => state.data;
export const formsSetData = (state: FormsState) => state.setData;
