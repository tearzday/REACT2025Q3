import { useCallback, useRef } from 'react';
import Button from '../UI/button';
import Input from '../UI/input';

interface SearchProps {
  onClick: (e: string) => void;
}

export default function Search({ onClick }: SearchProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = useCallback(() => {
    if (inputRef.current) {
      onClick(inputRef.current.value);
    }
  }, [onClick]);

  return (
    <div className="mx-auto flex gap-4  mx-auto my-5">
      <Input ref={inputRef} placeholder="Search for a country..." />

      <Button onClick={handleClick}>Search</Button>
    </div>
  );
}
