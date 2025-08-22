import type { Path, UseFormRegister } from 'react-hook-form';
import type { FormData } from '../../../types';

interface AddFileProps {
  id: Path<FormData>;
  label: string;
  register?: UseFormRegister<FormData>;
}

export default function AddFile({ id, label, register }: AddFileProps) {
  return (
    <div className="flex items-center justify-between text-gray-700">
      <label htmlFor={id} className="text-lg font-bold">
        {label}:{' '}
      </label>

      <input
        id={id}
        type="file"
        {...(register ? register(id) : null)}
        className="file:bg-neutral-700 file:text-color-olive file:py-2 file:px-4 file:rounded-lg"
      />
    </div>
  );
}
