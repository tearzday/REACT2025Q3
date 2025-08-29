import { memo, type ReactNode } from 'react';

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

const Button = memo(({ onClick, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="min-w-[150px] bg-blue-800 text-white py-2 px-4 rounded-xl font-medium cursor-pointer"
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
