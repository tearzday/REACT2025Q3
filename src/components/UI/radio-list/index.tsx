import type { Path, UseFormRegister } from 'react-hook-form';
import type { FormData } from '../../../types';

interface RadioListProps {
  data: Array<{
    id: number;
    label: string;
    value: string;
    name: Path<FormData>;
  }>;
  error?: string;
  register?: UseFormRegister<FormData>;
}

export default function RadioList({ data, register, error }: RadioListProps) {
  return (
    <div className="flex flex-col relative h-[40px]">
      <div className="flex justify-center gap-10  text-neutral-700 font-bold">
        {data.map((item) => (
          <div key={item.id} className="flex gap-2 items-center">
            <label htmlFor={item.value}>{item.label}</label>
            <input
              className="accent-neutral-700"
              type="radio"
              id={item.value}
              name={item.name}
              value={item.value}
              {...(register ? register(item.name) : null)}
            />
          </div>
        ))}
      </div>
      <p className="text-sm text-red-700 text-right absolute bottom-0 left-1/2 transform -translate-x-1/2">
        {error}
      </p>
    </div>
  );
}
