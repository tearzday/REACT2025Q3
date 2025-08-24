import { create } from 'zustand';
import type { FormData } from '../types';

interface FormsState {
  data: FormData[];
  setData: (newData: FormData) => void;
}

export const useForms = create<FormsState>((set) => ({
  data: [
    {
      name: 'John',
      age: 28,
      email: 'john@example.com',
      password: 'Passw0rd!',
      repeatPassword: 'Passw0rd!',
      gender: 'man',
      terms: true,
      file: new File(['dummy content'], 'avatar1.png', { type: 'image/png' }),
      country: 'USA',
    },
    {
      name: 'Alice',
      age: 32,
      email: 'alice@example.com',
      password: 'Alic3@123',
      repeatPassword: 'Alic3@123',
      gender: 'woman',
      terms: true,
      file: new File(['dummy content'], 'avatar2.jpg', { type: 'image/jpeg' }),
      country: 'Germany',
    },
  ],
  setData: (newData: FormData) =>
    set((state) => ({ data: [newData, ...state.data] })),
}));

export const formsGetData = (state: FormsState) => state.data;
export const formsSetData = (state: FormsState) => state.setData;
