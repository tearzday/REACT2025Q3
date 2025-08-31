import { type Ref } from 'react';

interface InputProps {
  ref: Ref<HTMLInputElement>;
  placeholder: string;
}

export default function Input({ placeholder, ref }: InputProps) {
  return (
    <input
      className="w-full border border-slate-600 p-2 bg-slate-800 rounded-xl outline-none"
      placeholder={placeholder}
      ref={ref}
    />
  );
}
