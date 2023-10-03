import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Button from '../NewButton';
import PanelButton from './PanelButton';
import { logout } from '../../store/slices/authSlice';
import { useAppDispatch, useAppSelector } from '../../hook';

interface UserPanelProps {
  selectedImage?: string;
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
    fill: none;
    color: inherit;
    display: flex;
    text-decoration: none;
`;

const UserPanelContainer = styled.div`
  display: none;
  border-radius: 1.25rem;
  background: #FFFFFF;
  box-sizing: border-box;
  border: 1px solid #CFCFCF;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.1);
  @media screen and (min-width: 576px) {
    display: block;
  }
  margin-bottom: 2.9375rem;
`;

const UserPanelHeaderContainer = styled.div`
  padding: 1.375rem 1.375rem 0;
  display: flex;
  margin-bottom: 1rem;
`;

const UserPanelUserLinkFlex = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
`;

const UserPanelImgContainer = styled.div`
    margin-right: 0.875rem;
`;

const UserPanelImgFlex = styled.div`
  display: flex;
`;

const UserPanelImg = styled.div`
  width: 63px;
  height: 63px;
  border-radius: 50%;
  outline: 0;
  background-size: cover;
  background-position: center;
`;

const UserNicknameContainer = styled.div`
  display: flex;
  align-items: center;
`;

const UserNickname = styled.span`
  font-weight: 600;
  font-size: 1.375rem;
  line-height: 1.23;
`;

const SettingsButtonContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const LogOutButtonContainer = styled.div`
  margin: 0 5.125rem;
`;

const LogOutButtonText = styled.div`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.2rem;
  color: #FFFFFF;
`;

const UserPanelButtonContainer = styled.div`
   &:last-of-type ${StyledLink}:last-child {
    margin-bottom: 0.875rem;
  }
`;

function UserPanel({ selectedImage }: UserPanelProps) {
  const dispatch = useAppDispatch();

  const userFullName = useAppSelector((state: any) => `${state.auth.user.name} ${state.auth.user.surname}`);

  const signOut = () => {
    dispatch(logout());
  };

  return (
    <UserPanelContainer>
      <UserPanelHeaderContainer>
        <UserPanelUserLinkFlex>
          <StyledLink to="/profile">
            <UserPanelImgContainer>
              <UserPanelImgFlex>
                <UserPanelImg
                  style={{ backgroundImage: `url(${(selectedImage) || 'https://storage.googleapis.com/circleci-bucket/IconsForCategory/profilePlaceholder.png'})` }}
                />
              </UserPanelImgFlex>
            </UserPanelImgContainer>
            <UserNicknameContainer>
              <UserNickname>{userFullName}</UserNickname>
            </UserNicknameContainer>
          </StyledLink>
        </UserPanelUserLinkFlex>
        <SettingsButtonContainer>
          <SettingsOutlinedIcon sx={{ color: '#808080' }} />
        </SettingsButtonContainer>
      </UserPanelHeaderContainer>
      <UserPanelButtonContainer>
        <PanelButton text="Profile" url="/profile" />
        <PanelButton text="Posts" url="/profile" />
        <PanelButton text="Subscriptions" url="/profile" />
        <PanelButton text="Groups" url="/profile" />
        <PanelButton text="Favorites" url="/profile" />
        <PanelButton text="Settings" url="/profile" />
      </UserPanelButtonContainer>
      <LogOutButtonContainer>
        <Button
          width="100%"
          borderRadius="20px"
          padding="0.6875rem 0 0.6875rem 0"
          margin="0 0 0.875rem 0"
          click={signOut}
        >
          <LogOutButtonText>Log out</LogOutButtonText>
        </Button>
      </LogOutButtonContainer>
    </UserPanelContainer>
  );
}

export default UserPanel;
