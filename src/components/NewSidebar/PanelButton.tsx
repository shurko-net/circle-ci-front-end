import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    cursor: pointer;
    margin: 0;
    padding: 0;
    font-weight: inherit;
    letter-spacing: inherit;
    font-family: inherit;
    border: inherit;
    font-size: inherit;
    fill: inherit;
    color: inherit;
    display: flex;
    text-decoration: none;
`;

const UserPanelButtonContainer = styled.div`
   &:last-of-type ${StyledLink}:last-child {
    margin-bottom: 0.875rem;
  }
`;

const UserPanelButton = styled(StyledLink)`
  padding: 0.875rem 0 0.875rem 1.6875rem;
  background: #F1F1F1;
  margin-bottom: 0.25rem;
  
`;

const UserPanelButtonText = styled.span`
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.22;
  font-family: "MitrMedium";
  
`;

function PanelButton({ text }:{ text: string }) {
  return (
    <UserPanelButtonContainer>
      <UserPanelButton to="/profile">
        <UserPanelButtonText>{text}</UserPanelButtonText>
      </UserPanelButton>
    </UserPanelButtonContainer>
  );
}

export default PanelButton;
