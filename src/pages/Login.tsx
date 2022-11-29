import React from 'react';

interface LoginProps {
  active: boolean;
  setActive: (active: boolean) => void;
}

function Login({ active, setActive }: LoginProps) {
  const CloseModal = () => setActive(false);
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={CloseModal}>
      <div className={active ? 'modal__content active' : 'modal__content'} onClick={(e) => e.stopPropagation()} />
    </div>
  );
}

export default Login;
