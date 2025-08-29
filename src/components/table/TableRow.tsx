import type { CountryData } from '@/types';
import { memo } from 'react';

interface TableRowProps {
  countryName: string;
  iso_code: string;
  keys: string[];
  data: CountryData;
}

const TableRow = memo(
  ({ countryName, iso_code, keys, data }: TableRowProps) => {
    return (
      <tr className="border border-slate-600">
        <td className="border border-slate-600 p-2">{countryName}</td>
        <td className="border border-slate-600 p-2">{iso_code}</td>
        {keys.map((key) => {
          return (
            <td key={key} className="border border-slate-600 p-2">
              {data[key as keyof typeof data] ?? 'N/A'}
            </td>
          );
        })}
      </tr>
    );
  }
);

TableRow.displayName = 'TableRow';

export default TableRow;
