import React, { useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../hook';
import { login, registration } from '../store/slices/authSlice';

const Div = styled.div``;

// interface NewLoginProps {

// }

function NewLogin() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');

  const dispatch = useAppDispatch();

  return (
    <Div>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Surname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />
      <button type="submit" onClick={() => dispatch(login({ email, password }))}>Login</button>
      <button
        type="submit"
        onClick={() => dispatch(registration({
          email, password, name, surname,
        }))}
      >
        Register
      </button>
    </Div>
  );
}

export default NewLogin;
