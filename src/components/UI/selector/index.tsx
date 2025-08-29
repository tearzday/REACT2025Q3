import type { Column } from '@/types';

interface SelectorProps<T> {
  value: T;
  label: string;
  options: Column<T>[];
  onChange: (value: T) => void;
}

export default function Selector<T extends string | number>({
  value,
  label,
  options,
  onChange,
}: SelectorProps<T>) {
  return (
    <select
      value={value}
      className="border border-slate-600 p-2 bg-slate-800 rounded-xl cursor-pointer"
      onChange={(e) => {
        const value = e.target.value as T;
        onChange(value);
      }}
    >
      <option value="">{label}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
