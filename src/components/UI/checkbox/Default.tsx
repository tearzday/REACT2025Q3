import type { Path, UseFormRegister } from 'react-hook-form';
import type { FormData } from '../../../types';

interface CheckboxDefaultProps {
  id: Path<FormData>;
  label: string;
  register?: UseFormRegister<FormData>;
}

export default function CheckboxDefault({
  id,
  label,
  register,
}: CheckboxDefaultProps) {
  return (
    <div className="flex gap-2 items-center text-neutral-700 font-bold">
      <label htmlFor={id}>{label}</label>
      <input
        type="checkbox"
        name={id}
        id={id}
        {...(register ? register(id) : null)}
        className="accent-neutral-700"
      />
    </div>
  );
}
