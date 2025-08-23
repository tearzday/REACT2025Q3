export interface FormData {
  name: string;
  age: number;
  email: string;
  password: string;
  repeatPassword: string;
  gender: 'man' | 'woman';
  terms: boolean;
  file: File;
  country: string;
}

export type FormDataErrors = {
  [K in keyof FormData]?: string;
};
