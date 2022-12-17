import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Text from './Text';
import Button from './Button';

const NavBarWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 70px;
    box-shadow:0 4px 10px rgba(0, 0, 0, .1);
    background-color: #ffffff;
    overflow: hidden;
    z-index: 99999999;
    a {
        text-decoration: none;
    }
`;

const Body = styled.div`
  height: inherit;
  display:flex;
  justify-content: center;
  /* align-items: center; */
`;

const NavbarBrand = styled.div`
  display: flex;
  /* margin-left: 30%; */
  white-space:nowrap;
  align-items: center;
  @media (max-width: 730px) {
    a:nth-child(-n+2) {
    display: none;
  }
  @media (max-width: 550px) {
    a:nth-child(-n+3) {
    display: none;
    }
  }
}
`;

const Conteiner = styled.div`
  min-width: 0;
  max-width: 1192px;
  width: 100%;
  @media (min-width: 1080px) {
    margin: 0 64px;
  }
  @media (min-width: 904px) and (max-width: 1079.98px) {
    margin: 0 64px;
  }
  @media (min-width: 728px) and (max-width: 903.98px) {
    margin: 0 48px;
  }
  @media (max-width: 551.98px) {
    margin: 0 24px;
  }
  @media (min-width: 552px) and (max-width: 727.98px){
    margin: 0 24px;
  }
  @media (max-width: 551.98px){
    margin: 0 24px;
  }
  

`;

const Content = styled.div`
      flex-direction: row;
      /* height: 75px; */
      padding: 18.5px 0;
      display: flex;
      justify-content: space-between;
`;

const Block = styled.div`
  display: block;
`;

const NavBlock = styled.div`
  /* display: block; */
  flex: 1 0 auto;
`;

function NavBar() {
  return (
    <NavBarWrapper>
      <Body>
        <Conteiner>
          <Content>
            <Link to="/">
              <Block>
                <Text color="#131515" weight={700} fSize="33">
                  <div className="navbar-text">
                    Circle CI
                  </div>
                </Text>
              </Block>

            </Link>
            <NavBlock />
            <NavbarBrand>
              <Link to="/about">
                <Button>
                  Our story
                </Button>
              </Link>
              <Link to="/member">
                <Button>
                  Membership
                </Button>
              </Link>

              <Button>
                Write
              </Button>

              <Link to="/login">
                <Button>
                  Sign In
                </Button>
              </Link>
              <Link to="/register">
                <Button>
                  Get started
                </Button>
              </Link>

            </NavbarBrand>
          </Content>
        </Conteiner>
      </Body>
    </NavBarWrapper>
  );
}

export default NavBar;
