import type { Path, UseFormRegister } from 'react-hook-form';
import type { FormData } from '@/types';

interface DataListProps {
  id: Path<FormData>;
  label: string;
  listName: string;
  listOptions: string[];
  placeholder: string;
  error?: string;
  register?: UseFormRegister<FormData>;
}

export default function DataList({
  id,
  label,
  listName,
  listOptions,
  placeholder,
  error,
  register,
}: DataListProps) {
  return (
    <div className="flex flex-col relative h-[60px]">
      <div className="flex items-center justify-between text-gray-700">
        <label htmlFor={id} className="text-lg font-bold">
          {label}:
        </label>
        <input
          placeholder={placeholder}
          type="text"
          className="rounded-lg p-2 bg-transparent border-2 border-neutral-700 outline-none"
          list={listName}
          id={id}
          {...(register ? register(id) : null)}
          name={id}
        />
        <datalist id={listName}>
          {listOptions.map((option, index) => (
            <option key={index} value={option} />
          ))}
        </datalist>
      </div>
      <p className="text-sm text-red-700 text-right absolute right-0 bottom-0">
        {error}
      </p>
    </div>
  );
}
