import type { ReactNode } from 'react';

interface ButtonDefaultProps {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export default function ButtonDefault({
  children,
  disabled,
  onClick,
}: ButtonDefaultProps) {
  return (
    <button
      className={`bg-neutral-700 text-color-olive py-2 px-4 rounded-lg ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
