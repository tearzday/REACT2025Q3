import { create } from 'zustand';

interface FormData {
  name: string;
  age: string;
  email: string;
  password: string;
  repeatPassword: string;
  gender: string;
  terms: boolean;
  file: null;
  country: string;
}

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
