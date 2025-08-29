import { type CountryData } from '@/types';
import { memo, useEffect, useRef, useState } from 'react';

interface TableRowProps {
  countryName: string;
  iso_code: string;
  keys: string[];
  data: CountryData;
}

const TableRow = memo(
  ({ countryName, iso_code, keys, data }: TableRowProps) => {
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
            prevData[key as keyof CountryData] !==
            data[key as keyof CountryData]
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
        <td className="border border-slate-600 p-2">{countryName}</td>
        <td className="border border-slate-600 p-2">{iso_code}</td>
        {keys.map((key) => {
          const value = data ? data[key as keyof typeof data] : null;
          return (
            <td
              key={key}
              className={`border border-slate-600 p-2 transition-colors duration-500 ${
                highlighted[key] ? 'text-purple-400' : ''
              }`}
            >
              {value !== 0 && value != null ? value : 'N/A'}
            </td>
          );
        })}
      </tr>
    );
  }
);

TableRow.displayName = 'TableRow';

export default TableRow;
