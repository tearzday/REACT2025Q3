import type { Ref } from 'react';
import type { Path, UseFormRegister } from 'react-hook-form';
import type { FormData } from '../../../types';

interface InputDefaultProps {
  id: Path<FormData>;
  placeholder: string;
  type: string;
  label: string;
  ref?: Ref<HTMLInputElement>;
  register?: UseFormRegister<FormData>;
}

export default function InputDefault({
  id,
  placeholder,
  type,
  label,
  ref,
  register,
}: InputDefaultProps) {
  return (
    <div className="flex items-center justify-between text-neutral-700">
      <label htmlFor={id} className="text-lg font-bold">
        {label}:{' '}
      </label>
      <input
        id={id}
        className="rounded-lg p-2 bg-transparent border-2 border-neutral-700 outline-none"
        type={type}
        placeholder={placeholder}
        {...(register ? register(id) : { ref })}
      />
    </div>
  );
}
