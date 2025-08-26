import { useEffect, useState } from 'react';
import type { Data } from './types';
import { getCO2Info } from './api';
import Table from './components/table/Table';

export default function App() {
  const [data, setData] = useState<Data | null>(null);
  const tableHeader = [
    'Country',
    'ISO',
    'Population',
    'Year',
    'CO2',
    'CO2 per Capita',
  ];

  useEffect(() => {
    const fetchData = async () => {
      const result = await getCO2Info();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <main className="bg-slate-900 text-slate-300 p-8 min-h-screen">
      <Table dataHeader={tableHeader} dataBody={data} />
    </main>
  );
}
