import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Themes from './Themes';

import Button from '../NewButton';

import UserPanel from './UserPanel';

import Suggestions from './Suggestions';

interface NewSidebarProps {
  userImageLoad: string
}

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

const LayoutSidebar = styled.div`
  grid-area: sidebar;
  @media screen and (min-width: 576px) {
    padding: 0 15px;
  }
`;

const CreatePost = styled(StyledLink)`
  @media (max-width: 991.98px) {
    display: none;
  }
`;

const ButtonText = styled.span`
  font-weight: 700;
  font-size: 1.625rem;
  line-height: 1.154;
  color: #FFFFFF;
  font-family: 'MitrMedium';
  @media (max-width: 767.98px) {
    font-size: 1.5rem;
  }
`;

const SmallCreatePostBody = styled.div`
  display: block;
  @media screen and (min-width: 576px) {
    display: none;
  }
  background: #FFFFFF;
  margin-bottom: 2rem;
`;

const SmallCreatePostContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 1rem 0;
`;

const SmallCreatePostLink = styled(StyledLink)`
  
`;

const SmallCreatePostImgContainer = styled.div`
  margin-right: 0.8rem;
`;

const SmallCreatePostImg = styled.img`
  border-radius: 50%;
  width: 48px;
  height: 48px;
  box-sizing: border-box;
  background-clip: content-box;
  object-fit: cover;
`;

const SmallCreatePostButton = styled(Button)`
    margin: 0.4rem 0;
    font-size: 0.875rem;
    flex-grow: 1;
    max-width: none;
    justify-content: left;
    line-height: 1.5;
    border: 1px solid #60BDC2;
    border-radius: 35px;
    display: inline-flex;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: 167ms;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    font-family: inherit;
    font-weight: 600;
    overflow: hidden;
    text-align: center;
    transition-property: background-color,box-shadow,color;
    vertical-align: middle;
    min-height: 3rem;
    padding: 0.625rem 0.5rem 0.625rem 1rem;
    background: none;
`;

const SmallCreatePostButtonText = styled.span`

`;

function NewSidebar({ userImageLoad }:NewSidebarProps) {
  const subdomain = useSelector((state: any) => state.user.subdomain);
  return (
    <LayoutSidebar>
      <CreatePost to="/create-post">
        <Button
          width="100%"
          borderRadius="20px"
          margin="0 0 1.875rem 0"
          padding="1rem 0 1rem 0"
        >
          <ButtonText>Create post</ButtonText>
        </Button>
      </CreatePost>
      <SmallCreatePostBody>
        <SmallCreatePostContainer>
          <SmallCreatePostLink to={`/${subdomain}/home`}>
            <SmallCreatePostImgContainer>
              <SmallCreatePostImg src="https://i.pinimg.com/564x/70/b1/2e/70b12ec6ed5010cf53b2ee5c014bba4d.jpg" />
            </SmallCreatePostImgContainer>
          </SmallCreatePostLink>
          <SmallCreatePostButton>
            <SmallCreatePostButtonText>Create post</SmallCreatePostButtonText>
          </SmallCreatePostButton>
        </SmallCreatePostContainer>
      </SmallCreatePostBody>
      <UserPanel userImageLoad={userImageLoad} />
      <Themes />
      <Suggestions />
    </LayoutSidebar>
  );
}

export default NewSidebar;
