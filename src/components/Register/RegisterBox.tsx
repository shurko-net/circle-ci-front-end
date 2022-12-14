import React from 'react';
import styled from 'styled-components';

interface LoginProps {
  children: any;
}

const RegisterBox = styled.div`
  width: 400px;
  padding: 40px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, .2);
  border-radius: 16px;
  text-align: center;
`;

function Login({ children }:LoginProps) {
  return (
    <RegisterBox>{children}</RegisterBox>
  );
}

export default Login;
