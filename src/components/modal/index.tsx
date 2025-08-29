import { memo, type ReactNode, useEffect } from 'react';

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

const Modal = memo(({ onClose, children }: ModalProps) => {
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
      className="w-full h-svh bg-black/50 d-flex content-center justify-items-center fixed top-0"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-96 xl:w-2/6 bg-slate-800 border-2 border-blue-800 rounded-xl flex flex-col p-2 text-white"
      >
        <button className="self-end mb-2 cursor-pointer" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
});

Modal.displayName = 'Modal';

export default Modal;
