import { useEffect, useState } from 'react';
import type { Data } from './types';
import { getCO2Info } from './api';
import Table from './components/table/Table';
import Selector from './components/UI/selector';
import Button from './components/UI/button';

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
    <div className="bg-slate-900 text-slate-300 p-8 min-h-screen">
      <header>
        <Selector options={['test', '222']} label="Test" />
        <Button
          onClick={() => {
            console.log('Button clicked');
          }}
        >
          Click me
        </Button>
      </header>
      <Table dataHeader={tableHeader} dataBody={data} />
    </div>
  );
}
