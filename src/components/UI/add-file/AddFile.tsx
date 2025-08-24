import type { Path, UseFormRegister } from 'react-hook-form';
import type { FormData } from '../../../types';

interface AddFileProps {
  id: Path<FormData>;
  label: string;
  error?: string;
  register?: UseFormRegister<FormData>;
}

export default function AddFile({ id, label, register, error }: AddFileProps) {
  return (
    <div className="flex flex-col relative h-[60px]">
      <div className="flex items-center justify-between text-gray-700">
        <label htmlFor={id} className="text-lg font-bold">
          {label}:{' '}
        </label>

        <input
          id={id}
          type="file"
          name={id}
          {...(register ? register(id) : null)}
          className="file:bg-neutral-700 file:text-color-olive file:py-2 file:px-4 file:rounded-lg"
        />
      </div>
      <p className="text-sm text-red-700 text-right absolute right-0 bottom-0">
        {error}
      </p>
    </div>
  );
}
