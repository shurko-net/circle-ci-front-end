import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  left: 0;
  bottom: 0;
  width: 100%;
  /* margin-top: auto; */
`;

const FooterContainerContainer = styled.div`
  /* position: fixed; */
  width: 100%;
  left: 0;
  bottom: 0;
  /* z-index: 50; */
  background: #D7D7D7;
`;

const FooterBody = styled.div`
  margin: 0 auto;
  max-width: 1330px;
  padding: 0px 15px;
`;

const FooterMenuContainer = styled.div`
  min-height: 382px;
`;

const MenuFooter = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 30px;
  padding-top: 45px;
  
  & button {
    cursor: default;
    margin: 0px 0px 31px 0px;
    border: none;
    background: none;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
  }
  
  &.menuFooterList {
    &:not(:last-child) {
      margin: 0px 0px 15px 0px;
    }
  }
  
  & li {
    color: grey;
    transition: color 0.3s ease 0s;
    line-height: 120%;
    font-weight: 400;
    list-style-type: none;
    font-size: 14px;
    line-height: 17px;
    margin: 0px 0px 15px 0px;
  }
  & a:hover {
    color: #60BDC2;
    cursor: pointer;
    transition: 0.3s;
  }
`;

const MenuFooterColumn = styled.div`

`;

const MenuFooterLink = styled.a`
`;

function NewFooter() {
  return (
    <Footer>
      <FooterContainerContainer>
        <FooterBody>
          <FooterMenuContainer>

            <MenuFooter>
              <MenuFooterColumn>
                <button type="button">Site</button>
                <ul className="menuFooterList">
                  <li><MenuFooterLink>About project</MenuFooterLink></li>
                  <li><MenuFooterLink>Contacts</MenuFooterLink></li>
                  <li><MenuFooterLink>Advertising</MenuFooterLink></li>
                  <li><MenuFooterLink>Report a bug</MenuFooterLink></li>
                  <li><MenuFooterLink>Comments and suggestions</MenuFooterLink></li>
                  <li><MenuFooterLink>News</MenuFooterLink></li>
                </ul>
              </MenuFooterColumn>
              <MenuFooterColumn>
                <button type="button">Information</button>
                <ul className="menuFooterList">
                  <li><MenuFooterLink>Help</MenuFooterLink></li>
                  <li><MenuFooterLink>Code</MenuFooterLink></li>
                  <li><MenuFooterLink>Verification</MenuFooterLink></li>
                  <li><MenuFooterLink>Ban-list</MenuFooterLink></li>
                  <li><MenuFooterLink>Confidentiality</MenuFooterLink></li>
                  <li><MenuFooterLink>Social network rules</MenuFooterLink></li>
                </ul>
              </MenuFooterColumn>
              <MenuFooterColumn>
                <button type="button">Partners</button>
                <ul className="menuFooterList">
                  <li><MenuFooterLink>Superfly</MenuFooterLink></li>
                </ul>
              </MenuFooterColumn>
            </MenuFooter>
          </FooterMenuContainer>
        </FooterBody>
      </FooterContainerContainer>
    </Footer>
  );
}

export default NewFooter;
