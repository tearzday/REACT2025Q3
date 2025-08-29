import { useState } from 'react';
import Button from '../UI/button';
import Input from '../UI/input';

interface SearchProps {
  onClick: (e: string) => void;
}

export default function Search({ onClick }: SearchProps) {
  const [value, setValue] = useState<string>('');

  return (
    <div className="mx-auto flex gap-4  mx-auto my-5">
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search for a country..."
      />

      <Button onClick={() => onClick(value)}>Search</Button>
    </div>
  );
}
