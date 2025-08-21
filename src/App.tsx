import { useState } from 'react';
import Modal from './components/modal/Modal';
import { createPortal } from 'react-dom';
import UncontrolledForm from './components/forms/uncontrolled-form/UncontrolledForm';
import HookForm from './components/forms/hook-form/HookForm';

export default function App() {
  const [showUncontrolledForm, setShowUncontrolledForm] = useState(false);
  const [showReactHookForm, setShowReactHookForm] = useState(false);

  return (
    <>
      <div className="flex gap-3">
        <button onClick={() => setShowUncontrolledForm(true)}>
          Open UncontrolledForm
        </button>
        <button onClick={() => setShowReactHookForm(true)}>
          Open ReactHookForm
        </button>
      </div>
      {showUncontrolledForm &&
        createPortal(
          <Modal onClose={() => setShowUncontrolledForm(false)}>
            <UncontrolledForm />
          </Modal>,
          document.body
        )}

      {showReactHookForm &&
        createPortal(
          <Modal onClose={() => setShowReactHookForm(false)}>
            <HookForm />
          </Modal>,
          document.body
        )}
    </>
  );
}
