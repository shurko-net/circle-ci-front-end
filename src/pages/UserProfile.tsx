import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import instance, { BASE_URL } from '../http';
import UserProfileInfoBlock from '../components/UserProfile/UserProfileInfoBlock';
import BackgroundImage from '../components/UserProfile/BackgroundImage';
import ProfileContent from '../components/UserProfile/ProfileContent';

const ProfileBackgroundImage = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 25%;
  border-top-left-radius: 1.25rem;
  border-top-right-radius: 1.25rem;
  /* cursor: pointer; */
`;

const ProfileBackgroundImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  display: flex;
  justify-items: center;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 1.25rem;
  border-top-right-radius: 1.25rem;
  background: #B8DBE0;
`;

const ProfileBackgroundImageRelative = styled.div`
  left: 0;
  top: 0;
  position: relative;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
`;

const UserCardPhotoEdit = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f9fafb;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserImage = styled.div`
  width: 152px;
  height: 152px;
  border-radius: 50%;
  outline: 0;
  background-size: cover;
  background-position: center;
`;

interface UserData {
  name: string;
  surname: string;
  followersAmount: number;
  commentsAmount: number;
  postsAmount: number;
  isMyself: boolean;
  isFollowed: boolean;
  biography: string,
  profileImageUrl: string,
  backgroundImageUrl: string
}

function userProfile() {
  const { userId } = useParams();

  const [userData, setUserData] = useState({} as UserData);

  useEffect(() => {
    instance.get(`${BASE_URL}/get-user/${userId}`)
      .then((resp) => {
        setUserData(resp.data);
      });
  }, []);

  const handleSubscribe = () => {
    instance.put(`${BASE_URL}/follow/${userId}`)
      .then((resp: any) => {
        console.log(resp.data);
        setUserData({
          name: resp.data.mappedUser.name,
          surname: resp.data.mappedUser.surname,
          followersAmount: resp.data.mappedUser.followersAmount,
          commentsAmount: 0,
          postsAmount: 0,
          isMyself: false,
          isFollowed: resp.data.isFollowed,
          biography: resp.data.mappedUser.biography,
          profileImageUrl: resp.data.mappedUser.profileImageUrl,
          backgroundImageUrl: resp.data.mappedUser.backgroundImageUrl,
        });
      });
  };

  if (!Object.keys(userData).length) {
    return null;
  }

  return (
    <UserProfileInfoBlock>
      <BackgroundImage>
        <ProfileBackgroundImage>
          <ProfileBackgroundImageContainer>
            {userData.backgroundImageUrl === ''
               || (
               <ProfileBackgroundImageRelative style={{ backgroundImage: `url(${userData.backgroundImageUrl})` }} />
               )}
          </ProfileBackgroundImageContainer>
        </ProfileBackgroundImage>
      </BackgroundImage>
      <ProfileContent
        surname={userData.surname}
        name={userData.name}
        followersAmount={userData.followersAmount}
        commentsAmount={userData.commentsAmount}
        postsAmount={userData.postsAmount}
        isFollowed={userData.isFollowed}
        isMyself={userData.isMyself}
        handleSubscribe={handleSubscribe}
      >
        {userData.profileImageUrl === '' ? (
          <UserCardPhotoEdit>
            <UserImage
              style={{ backgroundImage: 'url(https://storage.googleapis.com/circle-ci-bucket/IconsForCategory/profilePlaceholder.png)' }}
            />
          </UserCardPhotoEdit>
        ) : (
          <UserCardPhotoEdit>
            <UserImage
              style={{ backgroundImage: `url(${userData.profileImageUrl})` }}
            />
          </UserCardPhotoEdit>
        )}
      </ProfileContent>
    </UserProfileInfoBlock>
  );
}

export default userProfile;
