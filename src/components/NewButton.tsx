import React from 'react';
import styled from 'styled-components';

interface NewButtonProps {
  display?: string;
  marginLeft?: string;
  fontWeight?: string;
  border?: string;
  padding?: string;
  borderRadius?: string;
  transition?: string;
  children: any;
  openBtn?: string;
  color?: string;
  background?: string;
  margin?: string;
  width?: string;
  height?: string;
  click?: () => void;
}

const NewButtonNavBar = styled.button<{ display?: string;
  marginLeft?: string; fontWeight?: string; border?: string; padding?: string;
  borderRadius?: string; transition?: string; background?: string; margin?: string;
  width?: string; height?: string }>`
  /* display: ${(props) => props.display || 'block'}; */
  font-weight: ${(props) => props.fontWeight || 'normal'};
  background: ${(props) => (props.background || '#60BDC2')} ;
  border: ${(props) => props.border || 'none'};
  padding: ${(props) => props.padding || ''};
  border-radius: ${(props) => props.borderRadius || ''};
  color:  ${(props) => props.color || 'black'};
  margin: ${(props) => props.margin || ''};
  width: ${(props) => props.width || ''};
  height: ${(props) => props.height || ''};
  cursor: pointer;

  
`;

export default function NewButton({
  openBtn,
  children,
  click,
  ...props

}: NewButtonProps) {
  return (
    <NewButtonNavBar
      className={openBtn}
      onClick={click}
      type="submit"
      {...props}
    >
      {children}

    </NewButtonNavBar>
  );
}
