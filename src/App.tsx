import { useState } from 'react';
import Modal from './components/modal/Modal';
import { createPortal } from 'react-dom';
import UncontrolledForm from './components/forms/uncontrolled-form/UncontrolledForm';
import HookForm from './components/forms/hook-form/HookForm';
import ButtonDefault from './components/UI/button/Default';
import Result from './components/result/result';

export default function App() {
  const [showUncontrolledForm, setShowUncontrolledForm] = useState(false);
  const [showReactHookForm, setShowReactHookForm] = useState(false);

  return (
    <main className="w-svw min-h-svh bg-color-olive flex flex-col items-center pt-20">
      <div className="flex gap-5">
        <ButtonDefault onClick={() => setShowUncontrolledForm(true)}>
          Open UncontrolledForm
        </ButtonDefault>
        <ButtonDefault onClick={() => setShowReactHookForm(true)}>
          Open ReactHookForm
        </ButtonDefault>
      </div>
      <Result />
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
