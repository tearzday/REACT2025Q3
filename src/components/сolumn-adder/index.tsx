import { useState } from 'react';
import Selector from '../UI/selector';
import Button from '../UI/button';
import type { Column } from '@/types';
import { newColumns } from '@/constants';

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

  const addNewColumn = () => {
    const newColumn = newColumns.find(
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
        options={newColumns}
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
