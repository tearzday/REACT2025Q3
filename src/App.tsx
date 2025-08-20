import { useState } from 'react';
import Modal from './components/modal/Modal';
import { createPortal } from 'react-dom';

export default function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>Open Modal</button>

      {showModal &&
        createPortal(
          <Modal onClose={() => setShowModal(false)}>
            <p>Modal Content</p>
          </Modal>,
          document.body
        )}
    </>
  );
}
