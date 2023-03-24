import React from 'react';
import styled from 'styled-components';

interface FlexProps {
  direction?: string;
  align?: string;
  justify?: string;
  flexWrap?: string;
  children?: any;
}

const StyledFlex = styled.div<{ direction?: string; align?: string; justify?: string; flexWrap?: string }>`
    display: flex;
    flex-direction: ${(props) => props.direction || ''};
    align-items: ${(props) => props.align || ''};
    justify-content: ${(props) => props.justify || ''};
    flex-wrap: ${(props) => props.flexWrap || ''};
`;

function Flex({
  direction, align, justify, children,
  flexWrap,
} : FlexProps) {
  return (
    <StyledFlex
      direction={direction}
      align={align}
      justify={justify}
      flexWrap={flexWrap}
    >
      {children}
    </StyledFlex>
  );
}

export default Flex;
