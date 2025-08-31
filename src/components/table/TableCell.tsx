interface TableCellProps {
  value: string;
  className?: string;
}

export default function TableCell({ value, className }: TableCellProps) {
  return (
    <td
      className={`border border-slate-600 p-2 transition-colors duration-500 ${className}`}
    >
      {value}
    </td>
  );
}
