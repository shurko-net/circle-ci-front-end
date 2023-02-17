import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';

interface AccountButtonProps {
  name: string,
  url:string
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
    
    box-sizing: inherit;
    &:focus   {
      border-bottom: 1px solid #2b2c28;
    }
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

function AccountButtonPanel({ name, url }:AccountButtonProps) {
  const activeStyle = {
    textDecoration: 'none',
    borderBottom: '1px solid #2b2c28',
  };
  const notActiveStyle = {
    textDecoration: 'none',
  };
  const setActive = ({ isActive } : any) => (isActive ? activeStyle : notActiveStyle);

  return (
    <Container>
      <ButtonMargin>
        <ButtonLink>
          <ButtonP>
            <NavLink to={url} style={setActive}>
              <ButtonText>{name}</ButtonText>
            </NavLink>
          </ButtonP>
        </ButtonLink>
      </ButtonMargin>
    </Container>
  );
}

export default AccountButtonPanel;
