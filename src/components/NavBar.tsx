import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Text from './Text';
import Button from './Button';
import Login from '../pages/Login';

const NavBarWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 70px;
    box-shadow:0 4px 10px rgba(0, 0, 0, .1);
    background-color: #ffffff;
    overflow: hidden;
    
    a {
        text-decoration: none;
    }
`;

const Container = styled.div`
  height: inherit;
  display:flex;
  justify-content: center;
  align-items: center;
`;

const NavbarBrand = styled.div`
  margin-left: 30%;
  white-space:nowrap;
`;

function NavBar() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <NavBarWrapper>
      <Container>
        <Link to="/">
          <Text color="#131515" weight={700} fSize="33">
            <div className="navbar-text">
              Circle CI
            </div>
          </Text>
        </Link>
        <NavbarBrand>
          <Button>
            Our story
          </Button>
          <Button>
            Membership
          </Button>
          <Button>
            Write
          </Button>
          <Button openBtn="open" click={() => setModalActive(true)}>
            Sign In
          </Button>
          <Button>
            Get started
          </Button>
          {modalActive && <Login active={modalActive} setActive={setModalActive} />}
        </NavbarBrand>
      </Container>
    </NavBarWrapper>
  );
}

export default NavBar;
