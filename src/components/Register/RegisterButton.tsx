import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children: any;
}

const RegisterButton = styled.button`
cursor:pointer;
width:100%;
height:46px;
border-radius: 3px;
font-size: 22px;
margin-top: 20px;
color: #fff;
background: #2b2c28;
`;

function Button({ children }: ButtonProps) {
  return (
    <RegisterButton>{children}</RegisterButton>
  );
}

export default Button;
