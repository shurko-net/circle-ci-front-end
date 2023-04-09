import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import Text from './Text';
import Button from './Button';
import UserPanel from './UserOptionMenu/UserOptionMenu';

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

const Container = styled.div`
  position: fixed;
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
      padding: 15px 0;
      display: flex;
      justify-content: space-between;
      height: 40px;
`;

const Block = styled.div`
  display: block;
`;

const NavBlock = styled.div`
  flex: 1 0 auto;
`;

const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FilterInput = styled.input`
  width: 300px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

function NavBar({ isLogged, userImageLoad, setFilterText }:

{ isLogged: boolean, userImageLoad: string, setFilterText: any }) {
  const location = useLocation();

  const isStartPage = location.pathname === '/';

  useEffect(() => {
    setFilterText('');
  }, [isStartPage]);

  return (

    <NavBarWrapper>
      <Body>
        <Container>
          <Content>
            <Flex>
              <Link to="/">
                <Block>
                  <Text color="#131515" weight={700} fSize="33">
                    <div className="navbar-text">
                      Circle CI
                    </div>
                  </Text>
                </Block>
              </Link>
            </Flex>
            <NavBlock />
            <NavbarBrand>
              {isStartPage ? <FilterInput type="text" placeholder="Пошук за назвою..." onChange={(e: any) => setFilterText(e.target.value)} /> : ''}
              <Link to="/about">
                <Button>
                  Про вебсайт
                </Button>
              </Link>
              {isLogged && (
                <>
                  <Link to="/create-post">
                    <Button>
                      Творити
                    </Button>
                  </Link>
                  <UserPanel userImageLoad={userImageLoad} />
                </>
              )}
              {!isLogged
                && (
                  <>
                    <Link to="/login">
                      <Button>
                        Увійти
                      </Button>
                    </Link>
                    <Link to="/register">
                      <Button>
                        Реєстрація
                      </Button>
                    </Link>
                  </>
                )}
            </NavbarBrand>
          </Content>
        </Container>
      </Body>
    </NavBarWrapper>
  );
}

export default NavBar;
