import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const styleLinkLogo = {
  textDecoration: 'none',
  color: '#000',
  fontWeight: 900,
  fontSize: '18px',
  lineHeight: `${18 / 22 * 100}%`,
  fontFamily: 'InterBlack',
};

const Header = styled.header`
    position: absolute;
    width: 100%;
    top: 0;
`;
const HeaderWrapper = styled.div`
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 50;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
`;
const HeaderContainerContainer = styled.div`
  margin: 0 auto;
  max-width: 1330px;
  padding: 0px 15px;
`;
const HeaderBody = styled.div`
    display: flex;
    align-items: center;
    min-height: 100px;
    position: relative;
`;
const HeaderMain = styled.div`
  & button {
    border-color: rgba(41, 41, 41, 1);
    background: rgba(8, 8, 8, 1);
    cursor: pointer;
    text-decoration: none;
    padding: 7px 16px 9px;
    color: rgba(255, 255, 255, 1);
    font-size: 14px;
    border-width: 1px;
    border-radius: 99em;
  }
    display: flex;
    align-items: center;
    flex: 0 0 ${922 / 1300 * 100}%;
    white-space: nowrap;
    @media (max-width: 991.98px) {
      flex: 1 1 auto;
    }
    @media (min-width: 767.98px) {
      & div.start {
        display: none;
      }
    }
`;

const DivBlock = styled.div`
@media (max-width: 767.98px) {
  display: block;
  flex: 1 0 auto;
}
`;

function AboutHeader() {
  return (
    <Header>
      <HeaderWrapper>
        <HeaderContainerContainer>
          <HeaderBody>
            <HeaderMain>
              <Link to="/" style={styleLinkLogo}>Circle CI</Link>
              <DivBlock />

            </HeaderMain>
          </HeaderBody>
        </HeaderContainerContainer>
      </HeaderWrapper>
    </Header>
  );
}

export default AboutHeader;
