import type { Data } from '@/types';

interface TableProps {
  dataHeader: string[];
  dataBody: Data | null;
}

export default function Table({ dataBody, dataHeader }: TableProps) {
  console.log(dataBody);
  if (!dataBody) {
    return <div>Loading...</div>;
  }

  return (
    <table className="border-collapse border mx-auto">
      <thead className="bg-slate-800">
        <tr>
          {dataHeader.map((item) => {
            return (
              <th key={item} className="border border-slate-600 px-8 py-4">
                {item}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {Object.entries(dataBody).map(([countryName, countryData]) => {
          return (
            <tr key={countryName} className="border border-slate-600">
              <td className="border border-slate-600 p-2">{countryName}</td>
              <td className="border border-slate-600 p-2">
                {countryData.iso_code}
              </td>
              <td className="border border-slate-600 p-2">
                {countryData.data[0].population}
              </td>
              <td className="border border-slate-600 p-2">
                {countryData.data[0].year}
              </td>
              <td className="border border-slate-600 p-2">
                {countryData.data[0].cement_co2}
              </td>
              <td className="border border-slate-600 p-2">
                {countryData.data[0].cement_co2_per_capita}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
