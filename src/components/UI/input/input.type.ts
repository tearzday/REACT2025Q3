import type { ChangeEvent } from 'react';

export type InputProps = {
  type: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};
