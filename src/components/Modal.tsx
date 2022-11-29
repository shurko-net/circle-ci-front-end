import React from 'react';

interface ModalProps {
  active: boolean;
  setActive: (active: boolean) => void;
}

function Modal({ active, setActive }: ModalProps) {
  const CloseModal = () => setActive(false);
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={CloseModal}>
      <div className={active ? 'modal__content active' : 'modal__content'} onClick={(e) => e.stopPropagation()} />
    </div>
  );
}

export default Modal;
