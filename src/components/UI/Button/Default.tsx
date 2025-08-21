import type { ReactNode } from 'react';

interface ButtonDefaultProps {
  onClick: () => void;
  children: ReactNode;
}

export default function ButtonDefault({
  children,
  onClick,
}: ButtonDefaultProps) {
  return (
    <button
      className="bg-neutral-700 text-color-olive py-2 px-4 rounded-lg"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
