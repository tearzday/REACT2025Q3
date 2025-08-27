import Button from '../UI/button';
import Input from '../UI/input';

interface SearchProps {
  value: string;
  onChange: (e: string) => void;
  onClick: () => void;
}

export default function Search({ value, onChange, onClick }: SearchProps) {
  return (
    <div className="max-w-4xl flex gap-4  mx-auto my-5">
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search for a country..."
      />

      <Button onClick={onClick}>Search</Button>
    </div>
  );
}
