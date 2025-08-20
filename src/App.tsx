import { useState } from 'react';
import Modal from './components/modal/Modal';
import { createPortal } from 'react-dom';
import UncontrolledForm from './components/forms/uncontrolled-form/UncontrolledForm';

export default function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>Open Modal</button>

      {showModal &&
        createPortal(
          <Modal onClose={() => setShowModal(false)}>
            <UncontrolledForm />
          </Modal>,
          document.body
        )}
    </>
  );
}
