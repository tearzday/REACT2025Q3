import { type ReactNode, useEffect } from 'react';

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ onClose, children }: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="w-svw h-svh bg-black/30 d-flex content-center justify-items-center absolute top-0"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-3/6 bg-color-olive border-2 border-neutral-700 rounded-xl flex flex-col p-2 text-white"
      >
        <button className="self-end text-neutral-700 mb-2" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
}
