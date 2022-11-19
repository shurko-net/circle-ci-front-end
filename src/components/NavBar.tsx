import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Text from './Text';

const NavBarWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: #131515;
    overflow: hidden;
    padding: 0px 15px;

    a {
        text-decoration: none;
    }
`;

function NavBar() {
  return (
    <NavBarWrapper>
      <Link to="/">
        <Text color="#FFFAFB" weight={700} fSize="28">Circle CI</Text>
      </Link>
    </NavBarWrapper>
  );
}

export default NavBar;
