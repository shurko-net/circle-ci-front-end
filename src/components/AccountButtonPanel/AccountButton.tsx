import React from 'react';
import styled from 'styled-components';

interface AccountButtonProps {
  name: string
}

const Container = styled.span`
   min-width: -webkit-max-content;
   padding-bottom: 6px;
   display: block;
`;

const ButtonMargin = styled.div`
    min-width: max-content;
    padding-bottom: 16px;
    margin-right: 32px;
    display: block;
    border-bottom: 1px solid #2b2c28;
    box-sizing: inherit;
`;

const ButtonLink = styled.a`
    padding: 0px;
    cursor: pointer;
    border: none;
    color: inherit;
    text-decoration: none;
`;

const ButtonP = styled.p`
    color: rgba(41, 41, 41, 1);
    line-height: 20px;
    font-size: 14px;
`;

const ButtonText = styled.span`
    box-sizing: inherit;
    color: #2b2c28;
    line-height: 20px;
    font-size: 14px;
    cursor: pointer;
    &:hover {
    color: #7de2d1;
  }
`;

function AccountButtonPanel({ name }:AccountButtonProps) {
  return (
    <Container>
      <ButtonMargin>
        <ButtonLink>
          <ButtonP>
            <ButtonText>{name}</ButtonText>
          </ButtonP>
        </ButtonLink>
      </ButtonMargin>
    </Container>
  );
}

export default AccountButtonPanel;
