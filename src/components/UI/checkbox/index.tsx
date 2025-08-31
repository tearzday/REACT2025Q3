import { memo, type ChangeEvent } from 'react';

interface CheckboxProps {
  value: string;
  label: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function Checkbox({ value, label, checked, onChange }: CheckboxProps) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        value={value}
        onChange={onChange}
        className="w-4 h-4 accent-blue-800"
      />
      {label}
    </label>
  );
}

export default memo(Checkbox);
