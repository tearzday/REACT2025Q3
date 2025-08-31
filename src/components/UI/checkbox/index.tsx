import { memo, type ChangeEvent } from 'react';

interface CheckboxProps {
  value: string;
  label: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function Checkbox({ value, label, checked, onChange }: CheckboxProps) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checked}
          value={value}
          onChange={onChange}
          className="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        {label}
      </label>
    </div>
  );
}

export default memo(Checkbox);
