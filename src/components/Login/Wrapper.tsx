import React from 'react';
import styled from 'styled-components';

interface WrapperProps {
  children:any;
}

const Wrapper = styled.div`
/* position:fixed; */
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  font-family:'Varela Round' sans-serif;
`;

function Wrap({ children }: WrapperProps) {
  return (
    <Wrapper>{children}</Wrapper>
  );
}

export default Wrap;
