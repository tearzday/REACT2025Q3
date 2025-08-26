interface SelectorProps {
  label: string;
  options: string[];
}

export default function Selector({ label, options }: SelectorProps) {
  return (
    <select className="border border-slate-600 p-2 bg-slate-800 rounded-xl">
      <option value="">{label}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
