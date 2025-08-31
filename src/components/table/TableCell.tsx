import { memo } from 'react';

interface TableCellProps {
  value: string;
  className?: string;
}

function TableCell({ value, className }: TableCellProps) {
  return (
    <td
      className={`border border-slate-600 p-2 transition-colors duration-500 ${className}`}
    >
      {value}
    </td>
  );
}

export default memo(TableCell);
