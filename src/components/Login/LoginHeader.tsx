import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
    background: #fff;
`;

const HeaderContainer = styled.nav`
    max-width: 1128px;
    width: 100%;
    margin: auto;
    padding-bottom: 1rem;
    padding-top: 0.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
`;

const LogoText = styled.h1`
    font-size: 2.25rem;
    margin-right: auto;
`;

function LoginHeader() {
  return (
    <Header>
      <HeaderContainer>
        <LogoText>CircleCi</LogoText>
      </HeaderContainer>
    </Header>
  );
}

export default LoginHeader;
