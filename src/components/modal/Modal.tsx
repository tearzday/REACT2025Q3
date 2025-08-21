import type { ReactNode } from 'react';

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ onClose, children }: ModalProps) {
  return (
    <div className="w-svw h-svh bg-black/30 d-flex content-center justify-items-center absolute top-0">
      <div className="w-3/6 bg-color-olive border-2 border-neutral-700 rounded-xl flex flex-col p-2 text-white">
        <button className="self-end" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
}
