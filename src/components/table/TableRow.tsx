import { type CountryData } from '@/types';
import { memo, useEffect, useRef, useState } from 'react';
import TableCell from './TableCell';

interface TableRowProps {
  countryName: string;
  iso_code: string;
  keys: string[];
  data: CountryData;
}

function TableRow({ countryName, iso_code, keys, data }: TableRowProps) {
  const [highlighted, setHighlighted] = useState<Record<string, boolean>>({});
  const prevDataRef = useRef<CountryData | null>(null);

  useEffect(() => {
    const prevData = prevDataRef.current;
    for (const key of keys) {
      if (prevData == null && data == null) {
        continue;
      }
      if (!data || (!prevData && prevData !== null)) {
        setHighlighted((prev) => ({ ...prev, [key]: true }));
      } else if (prevData) {
        if (
          prevData[key as keyof CountryData] !== data[key as keyof CountryData]
        ) {
          setHighlighted((prev) => ({ ...prev, [key]: true }));
        }
      }

      setTimeout(() => {
        setHighlighted({});
      }, 1000);
    }

    prevDataRef.current = data;
  }, [data, keys]);

  return (
    <tr className="border border-slate-600">
      <TableCell value={countryName} />
      <TableCell value={iso_code} />
      {keys.map((key) => {
        const value = data ? data[key as keyof typeof data] : null;
        return (
          <TableCell
            key={key}
            value={
              value !== undefined && value !== null ? String(value) : 'N/A'
            }
            className={`${highlighted[key] ? 'text-purple-400' : ''}`}
          />
        );
      })}
    </tr>
  );
}

export default memo(TableRow);
