import { lazy, Suspense, use, useCallback, useMemo, useState } from 'react';
import type { Column, Data } from './types';
import { co2DataPromise } from './api';
const Table = lazy(() => import('./components/table/Table'));
import Search from './components/search';
import Selector from './components/UI/selector';
import Button from './components/UI/button';
import { createPortal } from 'react-dom';
import Modal from './components/modal';
import ColumnAdder from './components/сolumn-adder';
import Loading from './components/lodaing';
import { defaultColumns, sortedData } from './constants';

export default function App() {
  const data = use(co2DataPromise);
  const [searchValue, setSearchValue] = useState<string>('');
  const [sortValue, setSortValue] = useState<string>('');
  const [yearValue, setYearValue] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const [tableColumns, setTableColumns] =
    useState<Column<string>[]>(defaultColumns);

  const years = useMemo(() => {
    return Array.from({ length: 2023 - 1750 + 1 }, (_, i) => {
      const year = 1750 + i;
      return { label: year, value: year };
    });
  }, []);

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

  const filterByYear = (data: Data, value: number): Data => {
    const filteredData = Object.fromEntries(
      Object.entries(data).map(([country, info]) => {
        const data = info.data;
        let filteredCountryData;
        if (!value) {
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

  const sortingByValue = (data: Data, value: string): Data => {
    switch (value) {
      case 'pop-high': {
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
      case 'pop-low': {
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
      case 'name-a': {
        const sortedData = Object.fromEntries(
          Object.entries(data).sort(([a], [b]) => {
            if (a < b) return -1;
            if (a > b) return 1;

            return 0;
          })
        );
        return sortedData;
      }
      case 'name-z': {
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

  const currentTableHeader = useMemo(
    () => tableColumns.filter((item) => item.checked),
    [tableColumns]
  );

  const changeColumns = useCallback((newColumns: Record<string, boolean>) => {
    setTableColumns((prevColumns) =>
      prevColumns.map((column) => ({
        ...column,
        checked: newColumns[column.value] ?? false,
      }))
    );
  }, []);

  const currentData = useMemo(() => {
    const searched = searchForCountry(data, searchValue);
    const filtered = filterByYear(searched, yearValue);
    const sorted = sortingByValue(filtered, sortValue);
    return sorted;
  }, [data, searchValue, yearValue, sortValue]);

  return (
    <div className="overflow-auto w-full bg-slate-900 text-slate-300 p-8 min-h-screen">
      <header className="max-w-4xl mx-auto mb-8">
        <Search onClick={setSearchValue} />
        <div className="flex items-center justify-center gap-4">
          <Selector
            label="Set year"
            options={years}
            onChange={setYearValue}
            value={yearValue}
          />
          <Selector
            label="Sorting by"
            options={sortedData}
            value={sortValue}
            onChange={setSortValue}
          />
          <Button onClick={() => setModalOpen(true)}>Modal</Button>
        </div>
      </header>
      <Suspense fallback={<Loading />}>
        <Table dataHeader={currentTableHeader} dataBody={currentData} />
      </Suspense>

      {modalOpen &&
        createPortal(
          <Modal onClose={() => setModalOpen(false)}>
            <ColumnAdder
              onClose={() => setModalOpen(false)}
              currentColumns={tableColumns}
              onChangeColumn={changeColumns}
            />
          </Modal>,
          document.body
        )}
    </div>
  );
}
