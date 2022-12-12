import React from 'react';
import styled from 'styled-components';

interface NavbarlinkProps {
  name: string;
  link?: string;
}

const Container = styled.div`
    margin-right: 26px;
    margin-bottom: 8px;
    display: block;
`;

const A = styled.a`
    margin: 0;
    padding: 0;
    font-weight: inherit;
    letter-spacing: inherit;
    font-family: inherit;
    border: inherit;
    font-size: inherit;
    fill: inherit;
    color: inherit;
    text-decoration: none;
`;

const Text = styled.p`
    color: rgba(117, 117, 117, 1);
    font-size: 14px;
    font-weight: 400;
`;

function Navbarlink({ name, link }:NavbarlinkProps) {
  return (
    <Container>
      <A href={link}>
        <Text>{name}</Text>
      </A>
    </Container>
  );
}

export default Navbarlink;
