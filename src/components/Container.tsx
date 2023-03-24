import React from 'react';
import styled from 'styled-components';

interface ContainerProps {
  maxWidth?: string;
  margin?: string;
  display?: string;
  marginTop?: string;
  minWidth?: string;
  flex?: string;
  width?: string;
  children?: any;
}

const StyledContainer = styled.div<{ maxWidth?: string; margin?: string; display?: string;
  marginTop?: string; minWidth?: string; flex?: string; width?: string; }>`
  /* @media (min-width: 1080px) {
   
    max-width: ${(props) => props.maxWidth};
    } */
    max-width: ${(props) => props.maxWidth};
    min-width: ${(props) => props.minWidth || ''};
      margin: ${(props) => props.margin || ''};
      display: ${(props) => props.display || ''};
      margin-top: ${(props) => props.marginTop || ''};
      flex: ${(props) => props.flex || ''};
      width:  ${(props) => props.width || ''};
  `;

function Container({
  maxWidth, margin, display,
  marginTop, children, flex,
  minWidth, width,
} : ContainerProps) {
  return (
    <StyledContainer
      maxWidth={maxWidth}
      margin={margin}
      display={display}
      marginTop={marginTop}
      flex={flex}
      minWidth={minWidth}
      width={width}
    >
      {children}
    </StyledContainer>
  );
}

export default Container;
