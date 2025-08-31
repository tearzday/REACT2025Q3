import { useCallback, useState } from 'react';
import Button from '../UI/button';
import type { Column } from '@/types';
import Checkbox from '../UI/checkbox';

interface ColumnAdderProps {
  currentColumns: Column<string>[];
  onChangeColumn: (newColumns: Record<string, boolean>) => void;
  onClose: () => void;
}

export default function ColumnAdder({
  currentColumns,
  onChangeColumn,
  onClose,
}: ColumnAdderProps) {
  const [checkboxStates, setCheckboxStates] = useState(
    currentColumns.reduce(
      (acc, column) => {
        acc[column.value] = column.checked ?? false;
        return acc;
      },
      {} as Record<string, boolean>
    )
  );

  const handleCheckboxChange = (value: string) => {
    setCheckboxStates((prevState) => ({
      ...prevState,
      [value]: !prevState[value],
    }));
  };

  const changeColumns = useCallback(() => {
    onChangeColumn(checkboxStates);
    onClose();
  }, [checkboxStates, onChangeColumn, onClose]);

  return (
    <div className="flex flex-col p-8 gap-8 relative">
      {currentColumns.map((column) => (
        <Checkbox
          key={column.value}
          value={column.value}
          label={column.label}
          checked={checkboxStates[column.value] ?? false}
          onChange={() => handleCheckboxChange(column.value)}
        />
      ))}

      <Button onClick={changeColumns}>Change columns</Button>
    </div>
  );
}
