import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  display?: string;
  marginLeft?: string;
  fontWeight?: string;
  border?: string;
  padding?: string;
  borderRadius?: string;
  transition?: string;
  children: any;
  openBtn?: string;
  primary?: boolean;
  color?: string;
  background?: string;
  click?: () => void;
}

const ButtonNavBar = styled.button<{ primary?: boolean; display?: string;
  marginLeft?: string; fontWeight?: string; border?: string; padding?: string;
  borderRadius?: string; transition?: string; background?: string }>`
  display: ${(props) => props.display || 'block'};
  margin-left: ${(props) => props.marginLeft || '20px'};
  font-weight: ${(props) => props.fontWeight || 'normal'};
  background: ${(props) => (props.primary === true ? '#7DE2D1' : '#ffffff')} ;
  border: ${(props) => props.border || 'none'};
  padding: ${(props) => props.padding || '7px 16px 9px'};
  border-radius: ${(props) => props.borderRadius || '18px'};
  color:  ${(props) => props.color || 'black'};
  cursor:pointer;
  transition: ${(props) => props.transition || 'all .07s ease-in-out'};
  &:hover {
    box-shadow:0 4px 10px rgba(0, 0, 0, .1);
    background:${(props) => props.background || '#7DE2D1'};
  }
  a {
    text-decoration: none;
    color: none;
  }
`;

export default function Button({
  openBtn, children, click, primary, display, marginLeft,
  fontWeight, border, padding, borderRadius, transition, color, background,

}: ButtonProps) {
  return (
    <ButtonNavBar
      className={openBtn}
      onClick={click}
      type="submit"
      primary={primary}
      display={display}
      marginLeft={marginLeft}
      fontWeight={fontWeight}
      border={border}
      padding={padding}
      borderRadius={borderRadius}
      transition={transition}
      color={color}
      background={background}
    >
      {children}

    </ButtonNavBar>
  );
}
