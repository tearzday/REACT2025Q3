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

  const tableHeader = [
    'Country',
    'ISO',
    'Population',
    'Year',
    'CO2',
    'CO2 per Capita',
  ];

  const years = Array.from({ length: 2025 - 1750 + 1 }, (_, i) => 1750 + i);

  const searchForCountry = () => {
    if (data) {
      const countries = Object.keys(data);
      const newCountries = countries.filter((country) =>
        country.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      );

      const newData = Object.fromEntries(
        Object.entries(data).filter(([key]) => newCountries.includes(key))
      );
      setCurrentData(newData);
    }
  };

  const filterByYear = (value: number | string) => {
    if (data) {
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
      setCurrentData(filteredData);
    }
  };

  const sortingByValue = (value: number | string) => {
    if (currentData) {
      switch (value) {
        case 'Population: High to Low': {
          const sortedData = Object.fromEntries(
            Object.entries(currentData).sort(([, a], [, b]) => {
              const popA = a.data[0]?.population;
              const popB = b.data[0]?.population;

              if (!popA && !popB) return 0;
              if (!popA) return 1;
              if (!popB) return -1;

              return popB - popA;
            })
          );
          setCurrentData(sortedData);
          break;
        }
        case 'Population: Low to High': {
          const sortedData = Object.fromEntries(
            Object.entries(currentData).sort(([, a], [, b]) => {
              const popA = a.data[0]?.population;
              const popB = b.data[0]?.population;

              if (!popA && !popB) return 0;
              if (!popA) return -1;
              if (!popB) return 1;

              return popA - popB;
            })
          );
          setCurrentData(sortedData);
          break;
        }
        case 'Name: A → Z': {
          const sortedData = Object.fromEntries(
            Object.entries(currentData).sort(([a], [b]) => {
              if (a < b) return -1;
              if (a > b) return 1;

              return 0;
            })
          );
          setCurrentData(sortedData);
          break;
        }
        case 'Name: Z → A': {
          const sortedData = Object.fromEntries(
            Object.entries(currentData).sort(([a], [b]) => {
              if (a < b) return 1;
              if (a > b) return -1;

              return 0;
            })
          );
          setCurrentData(sortedData);
          break;
        }
      }
    }
  };

  useEffect(() => {
    filterByYear('');
  }, [data]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getCO2Info();
      setData(result);
      // setCurrentData(result);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-slate-900 text-slate-300 p-8 min-h-screen">
      <header>
        <Search
          value={searchValue}
          onChange={setSearchValue}
          onClick={searchForCountry}
        />
        <Selector label="Set year" options={years} onChange={filterByYear} />
        <Selector
          label="Sorting by"
          options={[
            'Population: High to Low',
            'Population: Low to High',
            'Name: A → Z',
            'Name: Z → A',
          ]}
          onChange={sortingByValue}
        />
      </header>
      <Table dataHeader={tableHeader} dataBody={currentData} />
    </div>
  );
}
