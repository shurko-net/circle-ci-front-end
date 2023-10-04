import React from 'react';
import Modal from '@mui/material/Modal';

interface NewModalProps {
  isOpen?: boolean;
  children?: any;
  closenModal: () => void;
}

function ModalComponent({ closenModal, isOpen, children }: NewModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div>
      {/* <Button onClick={handleOpen}>{children}</Button> */}
      <Modal
        open={isOpen}
        onClose={closenModal}
      >
        {children}
      </Modal>
    </div>
  );
}

export default ModalComponent;
