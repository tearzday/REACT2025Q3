import { useEffect, useState } from 'react';
import type { Data } from './types';
import { getCO2Info } from './api';
import Table from './components/table/Table';
import Search from './components/search';
import Selector from './components/UI/selector';

export default function App() {
  const [data, setData] = useState<Data | null>(null);
  const [currentData, setCurrentData] = useState<Data | null>(null);
  const [searchValue, setSearchValue] = useState<string>('');
  const [sortValue, setSortValue] = useState<string | number>('');
  const [yearValue, setYearValue] = useState<string | number>('');

  const tableHeader = [
    'Country',
    'ISO',
    'Population',
    'Year',
    'CO2',
    'CO2 per Capita',
  ];

  const years = Array.from({ length: 2023 - 1750 + 1 }, (_, i) => 1750 + i);

  const searchForCountry = (data: Data, value: string): Data => {
    const countries = Object.keys(data);
    const newCountries = countries.filter((country) =>
      country.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );

    const newData = Object.fromEntries(
      Object.entries(data).filter(([key]) => newCountries.includes(key))
    );
    return newData;
  };

  const filterByYear = (data: Data, value: number | string): Data => {
    const filteredData = Object.fromEntries(
      Object.entries(data).map(([country, info]) => {
        const data = info.data;
        let filteredCountryData;
        if (value === '') {
          filteredCountryData = [data[data.length - 1]];
        } else {
          filteredCountryData = data.filter((item) => {
            return item.year === Number(value);
          });
        }

        return [country, { ...info, data: filteredCountryData }];
      })
    );
    return filteredData;
  };

  const sortingByValue = (data: Data, value: number | string): Data => {
    switch (value) {
      case 'Population: High to Low': {
        const sortedData = Object.fromEntries(
          Object.entries(data).sort(([, a], [, b]) => {
            const popA = a.data[0]?.population;
            const popB = b.data[0]?.population;

            if (!popA && !popB) return 0;
            if (!popA) return 1;
            if (!popB) return -1;

            return popB - popA;
          })
        );
        return sortedData;
      }
      case 'Population: Low to High': {
        const sortedData = Object.fromEntries(
          Object.entries(data).sort(([, a], [, b]) => {
            const popA = a.data[0]?.population;
            const popB = b.data[0]?.population;

            if (!popA && !popB) return 0;
            if (!popA) return -1;
            if (!popB) return 1;

            return popA - popB;
          })
        );
        return sortedData;
      }
      case 'Name: A → Z': {
        const sortedData = Object.fromEntries(
          Object.entries(data).sort(([a], [b]) => {
            if (a < b) return -1;
            if (a > b) return 1;

            return 0;
          })
        );
        return sortedData;
      }
      case 'Name: Z → A': {
        const sortedData = Object.fromEntries(
          Object.entries(data).sort(([a], [b]) => {
            if (a < b) return 1;
            if (a > b) return -1;

            return 0;
          })
        );
        return sortedData;
      }
      default:
        return data;
    }
  };

  useEffect(() => {
    if (data) {
      const newData = searchForCountry(data, searchValue);
      const filteredData = filterByYear(newData, yearValue);
      const sortedData = sortingByValue(filteredData, sortValue);
      setCurrentData(sortedData);
    }
  }, [searchValue, sortValue, yearValue]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getCO2Info();
      setData(result);
      setCurrentData(result);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-slate-900 text-slate-300 p-8 min-h-screen">
      <header>
        <Search onClick={setSearchValue} />
        <Selector
          label="Set year"
          options={years}
          onChange={setYearValue}
          value={yearValue}
        />
        <Selector
          label="Sorting by"
          options={[
            'Population: High to Low',
            'Population: Low to High',
            'Name: A → Z',
            'Name: Z → A',
          ]}
          value={sortValue}
          onChange={setSortValue}
        />
      </header>
      <Table dataHeader={tableHeader} dataBody={currentData} />
    </div>
  );
}
