import type { ReactNode } from 'react';

interface ButtonDefaultProps {
  children: ReactNode;
  onClick?: () => void;
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
