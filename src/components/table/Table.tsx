import type { Column, Data } from '@/types';
import TableRow from './TableRow';
import TableCellHeader from './TableCellHeader';
import { memo } from 'react';

interface TableProps {
  dataHeader: Column<string>[];
  dataBody: Data;
}

function Table({ dataBody, dataHeader }: TableProps) {
  // const currentHeader = dataHeader.filter((item) => item.checked);

  if (Object.keys(dataBody).length === 0) {
    return <div className="text-center text-2xl">Countries not found</div>;
  }

  return (
    <table className="border-collapse border mx-auto px-[20px]">
      <thead className="bg-slate-800">
        <tr>
          <TableCellHeader value={'Country'} />
          <TableCellHeader value={'ISO'} />
          {dataHeader.map((item) => (
            <TableCellHeader key={item.value} value={item.label} />
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.entries(dataBody).map(([countryName, countryData]) => {
          const data = countryData.data;
          const latestData = data[data.length - 1];

          return (
            <TableRow
              key={countryName}
              countryName={countryName}
              iso_code={countryData.iso_code}
              keys={dataHeader.map((key) => key.value)}
              data={latestData}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default memo(Table);
