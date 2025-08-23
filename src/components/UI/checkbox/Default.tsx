import type { Path, UseFormRegister } from 'react-hook-form';
import type { FormData } from '../../../types';

interface CheckboxDefaultProps {
  id: Path<FormData>;
  label: string;
  register?: UseFormRegister<FormData>;
  error?: string;
}

export default function CheckboxDefault({
  id,
  label,
  register,
  error,
}: CheckboxDefaultProps) {
  return (
    <div className="flex flex-col relative h-[40px]">
      <div className="flex gap-2 items-center text-neutral-700 font-bold">
        <label htmlFor={id} className="text-lg font-bold">
          {label}:{' '}
        </label>
        <input
          type="checkbox"
          name={id}
          id={id}
          {...(register ? register(id) : null)}
          className="accent-neutral-700"
        />
      </div>
      <p className="text-sm text-red-700 text-right absolute right-0 bottom-0">
        {error}
      </p>
    </div>
  );
}
