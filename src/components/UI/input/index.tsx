import type { Path, UseFormRegister } from 'react-hook-form';
import type { FormData } from '@/types';

interface InputDefaultProps {
  id: Path<FormData>;
  placeholder: string;
  type: string;
  label: string;
  strength?: string;
  error?: string;
  name?: string;
  register?: UseFormRegister<FormData>;
}

export default function InputDefault({
  id,
  placeholder,
  type,
  label,
  name,
  register,
  error,
  strength,
}: InputDefaultProps) {
  return (
    <div className="flex flex-col relative h-[60px]">
      <div className="flex items-center justify-between text-neutral-700">
        <label htmlFor={id} className="text-lg font-bold">
          {label}:{' '}
        </label>
        <input
          id={id}
          className="rounded-lg p-2 bg-transparent border-2 border-neutral-700 outline-none"
          type={type}
          placeholder={placeholder}
          name={name}
          {...(register ? register(id) : null)}
        />
      </div>
      <p className="text-sm text-red-700 text-right absolute right-0 bottom-0">
        {error}
      </p>
      {strength && (
        <p className="text-sm text-green-700 text-right absolute right-0 bottom-0">
          Strength: {strength}
        </p>
      )}
    </div>
  );
}
