import type { Column, Data } from '@/types';

interface TableProps {
  dataHeader: Column<string>[];
  dataBody: Data | null;
}

export default function Table({ dataBody, dataHeader }: TableProps) {
  console.log(dataHeader);
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
            <tr key={countryName} className="border border-slate-600">
              <td className="border border-slate-600 p-2">{countryName}</td>
              <td className="border border-slate-600 p-2">
                {countryData.iso_code}
              </td>
              {bodyKeys.map((key) => {
                return (
                  <td key={key.value} className="border border-slate-600 p-2">
                    {(latestData as unknown as Record<string, string>)?.[
                      key.value
                    ] ?? 'N/A'}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
