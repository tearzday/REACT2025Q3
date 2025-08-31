import type { Column } from '@/types';
import { memo } from 'react';

interface SelectorProps<T> {
  value: T;
  label: string;
  options: Column<T>[];
  onChange: (value: T) => void;
}

function SelectorComponent<T extends string | number>({
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
        const selectedValue = e.target.value as T;
        onChange(selectedValue);
      }}
    >
      <option value="">{label}</option>
      {options.map((option) => (
        <Option key={option.value} value={option.value} label={option.label} />
      ))}
    </select>
  );
}

const Option = memo(({ value, label }: Column<string | number>) => {
  return <option value={value}>{label}</option>;
});

Option.displayName = 'Option';

export default memo(SelectorComponent) as typeof SelectorComponent;
