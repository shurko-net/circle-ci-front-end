import React from 'react';
import styled from 'styled-components';

interface FlexProps {
  direction?: string;
  align?: string;
  justify?: string;
  children?: any;
}

const StyledFlex = styled.div<{ direction?: string; align?: string; justify?: string; }>`
    display: flex;
    flex-direction: ${(props) => props.direction || ''};
    align-items: ${(props) => props.align || ''};
    justify-content: ${(props) => props.justify || ''};
`;

function Flex({
  direction, align, justify, children,
} : FlexProps) {
  return (
    <StyledFlex
      direction={direction}
      align={align}
      justify={justify}
    >
      {children}
    </StyledFlex>
  );
}

export default Flex;
