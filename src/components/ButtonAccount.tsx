import React from 'react';
import styled from 'styled-components';

interface ButtonAccountProps {
  name: string;
}

const Container = styled.span`
    min-width: -webkit-max-content;
    padding-bottom: 6px;
    display: block;
`;

const ButtonLeft = styled.div`
    min-width: max-content;
    padding-bottom: 16px;
    margin-right: 32px;
    display: block;
    border-bottom: 1px solid rgba(41, 41, 41, 1);
`;

const ButtonLink = styled.a`
    padding: 0px;
    cursor: pointer;
    border: none;
`;

const ButtonP = styled.p`
    color: rgba(41, 41, 41, 1);
    line-height: 20px;
    font-size: 14px;

`;

const ButtonText = styled.span`
    box-sizing: inherit;
    color: rgba(41, 41, 41, 1);
    line-height: 20px;
    font-size: 14px;
`;

function ButtonAccount({ name }:ButtonAccountProps) {
  return (
    <Container>
      <ButtonLeft>
        <ButtonLink>
          <ButtonP>
            <ButtonText>{name}</ButtonText>
          </ButtonP>
        </ButtonLink>
      </ButtonLeft>
    </Container>
  );
}

export default ButtonAccount;
