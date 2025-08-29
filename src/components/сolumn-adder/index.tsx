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
    onAddColumn([...currentColumns, newColumn]);
    onClose();
  };

  return (
    <div className="flex flex-col gap-8 p-8 ">
      <Selector
        label="Add column"
        options={columns}
        onChange={setSelectedColumn}
        value={selectedColumn}
      />
      <Button onClick={addNewColumn}>Add new column</Button>
    </div>
  );
}
