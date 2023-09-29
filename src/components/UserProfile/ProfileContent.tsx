import React from 'react';
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import ProfileInfoContentSection from './ProfileInfoContentSection';

interface ProfileContentProps {
  children: any;
  name?: string;
  surname?: string;
  followersAmount?: number;
  commentsAmount?: number;
  postsAmount?: number;
  isMyself?: boolean;
  isFollowed?: boolean;
}

const ProfileContentContainer = styled.div`
  padding-left: 2.375rem;
  padding-right: 2.375rem;
`;

const DisplayFlex = styled.div`
  display: flex;
`;

const UserCardPhoto = styled.div`
  margin-top: -112px;
  z-index: 4;
  text-align: left;
`;

const UserCardPhotoWrapper = styled.div`
  width: 160px;
  height: 160px;
  box-sizing: border-box;
  border-radius: 50%;
  background-clip: border-box;
  background-color: #fff;
  border: 4px solid #fff;
  box-shadow: none;
  margin: auto;
  position: relative;
`;

const ProfileContentRelative = styled.div`
  margin-top: 0.5rem;
  position: relative;
`;

const ProfileUserName = styled.h1`
  display: inline;
  font-size: 1.875rem;
  font-weight: 600;
  line-height: normal;
  color: #000;
`;

const ProfileFirstRegistered = styled.div`
    margin-bottom: 25px;
`;

const ProfileFirstRegisteredP = styled.p`
  color: #7A7A7A;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  //border-top: 1px solid rgba(0,0,0,.15);
`;

const ProfileInfoContentBlock = styled.div`
  border-top: 1px solid rgba(0,0,0,.15);
  padding-left: 2.375rem;
  padding-right: 2.375rem;
  padding-bottom: 1.5rem;
  border-radius: 0 0 1.25rem 1.25rem;
`;

const ProfileInfoContentFlex = styled.div`
    display: flex;
    margin-top: 1.25rem;
    & > *:not(:last-child) {
      margin-right: 20px;
    }
`;

const ProfileButton = styled.button`
    border-radius: 1rem;
    cursor: pointer;
    background-color: #60BDC2;
    border: none;
    padding: 0.375rem 1rem;
    min-height: 1.6rem;
    line-height: 1rem;
    max-width: 480px;
    display: inline-flex;
    text-align: center;
    justify-content: center;  
    vertical-align: center;
    align-items: center;
    margin-top: 12px;
  
`;

const ProfileButtonIcon = styled.div`
    margin: 0 4px 0 -2px;
    display: inline-block;
    overflow: hidden;
    flex-shrink: 0;
    height: 1rem;
`;

const ProfileButtonText = styled.span`
    font-size: 16px;
    color: #fff;
`;

function ProfileContent({
  children, name, surname, followersAmount, commentsAmount, postsAmount,
  isMyself, isFollowed,
}:ProfileContentProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <ProfileContentContainer>
        <DisplayFlex>
          <UserCardPhoto>
            <UserCardPhotoWrapper>
              {children}
            </UserCardPhotoWrapper>
          </UserCardPhoto>
        </DisplayFlex>
        <ProfileContentRelative />
        <div>
          <ProfileUserName>
            {`${name} ${surname}`}
          </ProfileUserName>
        </div>
        <ProfileFirstRegistered>
          <ProfileFirstRegisteredP>1 year 14 days on this site</ProfileFirstRegisteredP>
        </ProfileFirstRegistered>
      </ProfileContentContainer>
      <ProfileInfoContentBlock>
        <ProfileInfoContentFlex>
          <ProfileInfoContentSection
            upValue={followersAmount}
            downValue="Subscribers"
          />
          <ProfileInfoContentSection
            upValue={commentsAmount}
            downValue="Comments"
          />
          <ProfileInfoContentSection
            upValue={postsAmount}
            downValue="Posts"
          />
        </ProfileInfoContentFlex>
        {isMyself || (isFollowed ? (
          <ProfileButton
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              transition: 'transform 0.8s ease',
            }}
          >
            <ProfileButtonIcon>
              {isHovered ? (
                <CloseIcon sx={{ color: '#fff', width: '1rem', height: '1rem' }} />

              ) : (
                <CheckIcon sx={{ color: '#fff', width: '1rem', height: '1rem' }} />
              )}
            </ProfileButtonIcon>
            <ProfileButtonText>{!isHovered ? 'Signed' : 'UnSubscribe'}</ProfileButtonText>
          </ProfileButton>
        )
          : (
            <ProfileButton>
              <ProfileButtonIcon>
                <AddIcon
                  sx={{ color: '#fff', width: '1rem', height: '1rem' }}
                />
              </ProfileButtonIcon>
              <ProfileButtonText>Subscribe</ProfileButtonText>
            </ProfileButton>
          )
        )}

      </ProfileInfoContentBlock>
    </>
  );
}

export default ProfileContent;
