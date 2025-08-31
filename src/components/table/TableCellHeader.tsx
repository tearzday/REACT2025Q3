import { memo } from 'react';

interface TableCellHeaderProps {
  value: string;
}

function TableCellHeader({ value }: TableCellHeaderProps) {
  return <td className="border border-slate-600 px-8 py-4">{value}</td>;
}

export default memo(TableCellHeader);
