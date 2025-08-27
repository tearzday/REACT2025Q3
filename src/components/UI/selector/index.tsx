interface SelectorProps {
  value: string | number;
  label: string;
  options: string[] | number[];
  onChange: (value: string | number) => void;
}

export default function Selector({
  value,
  label,
  options,
  onChange,
}: SelectorProps) {
  return (
    <select
      value={value}
      className="border border-slate-600 p-2 bg-slate-800 rounded-xl cursor-pointer"
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">{label}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
