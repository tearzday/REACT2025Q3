import { memo, type ChangeEvent } from 'react';

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = memo(({ placeholder, value, onChange }: InputProps) => {
  return (
    <input
      className="w-full border border-slate-600 p-2 bg-slate-800 rounded-xl outline-none"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
});

Input.displayName = 'Input';

export default Input;
