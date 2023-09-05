import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Footer = styled.footer`
    width: 100%;
    max-width: 1128px;
    margin: auto;
`;

const FooterGroup = styled.ul`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    height: auto;
    min-height: 50px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
`;

const GroupItem = styled.li`
    font-size: 0.75rem;
    display: flex;
    flex-shrink: 0;
    text-align: left;
    padding: 8px;
`;

const GroupItemLink = styled(Link)`
    color: rgba(0, 0, 0, 0.6);
    text-decoration: none;
    &:hover {
        color: #60BDC2; 
        text-decoration: underline;
    }
`;

const GroupItemText = styled.span`
   margin-right: 8px;
`;

function LoginFooter() {
  return (
    <Footer>
      <FooterGroup>
        <GroupItem>
          <GroupItemText>CircleCi</GroupItemText>
          <GroupItemText>© 2023</GroupItemText>
        </GroupItem>
        <GroupItem>
          <GroupItemLink to="/about">About</GroupItemLink>
        </GroupItem>
        <GroupItem>
          <GroupItemLink to="/about">Accessibility</GroupItemLink>
        </GroupItem>
        <GroupItem>
          <GroupItemLink to="/about">User Agreement</GroupItemLink>
        </GroupItem>
        <GroupItem>
          <GroupItemLink to="/about">Privacy Policy</GroupItemLink>
        </GroupItem>
        <GroupItem>
          <GroupItemLink to="/about">Cookie Policy</GroupItemLink>
        </GroupItem>
      </FooterGroup>
    </Footer>
  );
}

export default LoginFooter;
