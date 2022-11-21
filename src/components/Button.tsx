import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children: any;
}

const ButtonNavBar = styled.button`
  /* display: flex; */
  /* flex-flow: row nowrap;*/
  margin-left:20px;  
  font-weight: normal;
  background: #ffffff;
  border: none;
  padding: 7px 16px 9px;
  border-radius: 18px;
  cursor:pointer;
  transition: all .07s ease-in-out;
  &:hover {
    box-shadow:0 4px 10px rgba(0, 0, 0, .1);
    background:#7DE2D1;
  }
`;

export default function Button({ children }: ButtonProps) {
  return (
    <ButtonNavBar type="submit">{children}</ButtonNavBar>
  );
}
