import { useState } from 'react';
import Modal from './components/modal/Modal';
import { createPortal } from 'react-dom';
import UncontrolledForm from './components/forms/uncontrolled-form/UncontrolledForm';
import HookForm from './components/forms/hook-form/HookForm';
import ButtonDefault from './components/UI/Button/Default';

export default function App() {
  const [showUncontrolledForm, setShowUncontrolledForm] = useState(false);
  const [showReactHookForm, setShowReactHookForm] = useState(false);

  return (
    <main className="w-svw h-svh bg-color-olive flex items-center justify-center">
      <div className="flex gap-5">
        <ButtonDefault onClick={() => setShowUncontrolledForm(true)}>
          Open UncontrolledForm
        </ButtonDefault>
        <ButtonDefault onClick={() => setShowReactHookForm(true)}>
          Open ReactHookForm
        </ButtonDefault>
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
    </main>
  );
}
