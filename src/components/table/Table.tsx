import type { Column, Data } from '@/types';
import TableRow from './TableRow';

interface TableProps {
  dataHeader: Column<string>[];
  dataBody: Data | null;
}

const Table = ({ dataBody, dataHeader }: TableProps) => {
  const bodyKeys: Column<string>[] = dataHeader.filter(
    (item) => !['country', 'iso_code'].includes(item.value)
  );

  if (!dataBody) {
    return <div>Loading...</div>;
  }

  return (
    <table className="border-collapse border mx-auto">
      <thead className="bg-slate-800">
        <tr>
          {dataHeader.map((item) => {
            return (
              <th
                key={item.value}
                className="border border-slate-600 px-8 py-4"
              >
                {item.label}
              </th>
            );
          })}
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
              keys={bodyKeys.map((key) => key.value)}
              data={latestData}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
