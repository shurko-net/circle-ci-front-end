import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children: any;
  openBtn?: string;
  click?: () => void;
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

export default function Button({ openBtn, children, click }: ButtonProps) {
  return (
    <ButtonNavBar className={openBtn} onClick={click} type="submit">{children}</ButtonNavBar>
  );
}
