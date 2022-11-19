import React from 'react';
import styled from 'styled-components';

interface TextProps {
  color: string;
  weight: number;
  fSize: string;
  children: string;
}

const TextStyle = styled.span<{ color: string; weight: number; fSize: string }>`
    color: ${(props) => (props.color ? props.color : '#fffafb')};
    font-size: ${(props) => `${props.fSize}px`};
    font-weight: ${(props) => props.weight};
`;

function Text({
  color, weight, fSize, children,
}: TextProps) {
  return (
    <TextStyle color={color} weight={weight} fSize={fSize}>
      {children}
    </TextStyle>
  );
}

export default Text;
