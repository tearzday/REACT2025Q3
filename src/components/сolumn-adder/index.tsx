import { useState } from 'react';
import Selector from '../UI/selector';
import Button from '../UI/button';
import type { Column } from '@/types';

interface ColumnAdderProps {
  currentColumns: Column<string>[];
  onAddColumn: (column: Column<string>[]) => void;
  onClose: () => void;
}

export default function ColumnAdder({
  currentColumns,
  onAddColumn,
  onClose,
}: ColumnAdderProps) {
  const [selectedColumn, setSelectedColumn] = useState<string>('');
  const [error, setError] = useState<string>('');
  const columns = [
    {
      label: 'Oil CO2',
      value: 'oil_co2',
    },
    {
      label: 'Temperature Change from CO2',
      value: 'temperature_change_from_co2',
    },
    {
      label: 'Gas CO2',
      value: 'gas_co2',
    },
    {
      label: 'Methane',
      value: 'methane',
    },
  ];

  const addNewColumn = () => {
    const newColumn = columns.find(
      (column) => column.value === selectedColumn
    ) as Column<string>;

    const hasColumn = currentColumns.some(
      (column) => column.value === newColumn.value
    );
    if (!hasColumn) {
      onAddColumn([...currentColumns, newColumn]);
      onClose();
    } else {
      setError('Column already exists');
    }
  };

  const changeSelector = (value: string) => {
    setSelectedColumn(value);
    setError('');
  };

  return (
    <div className="flex flex-col p-8 gap-8 relative">
      <Selector
        label="Add column"
        options={columns}
        onChange={(value) => {
          changeSelector(value);
        }}
        value={selectedColumn}
      />
      {error && <p className="text-red-500 absolute top-19">{error}</p>}
      <Button onClick={addNewColumn}>Add new column</Button>
    </div>
  );
}
