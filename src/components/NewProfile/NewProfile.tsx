import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import styled from 'styled-components';
import NewProfileModal from './NewProfileModal';

interface NewProfileProps {
  userImageLoad: string;
  onImageChange?: (e: any) => void,
}

const UserCard = styled.section`
    @media screen and (min-width: 576px) {
        border-radius: 1.25rem;
    }
    background: #FFFFFF;
    border: 1px solid #CFCFCF;
    box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.1);

`;

const BackgroundImageContainer = styled.div`
    min-height: 203px;
    max-height: 203px;
    border-top-left-radius: 1.25rem;
    border-top-right-radius: 1.25rem;
    position: relative;
    overflow-y: hidden;
`;

const ProfileBackgroundImageEdit = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition-duration: .4s;
    transition-timing-function: ease-in-out;
    transition-property: opacity;
    transition-delay: 1s;
    opacity: 1;
`;

const ProfileBackgroundImage = styled.div`
    position: relative;
    width: 100%;
    padding-bottom: 25%;
    border-top-left-radius: 1.25rem;
    border-top-right-radius: 1.25rem;
    cursor: pointer;
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
`;

const ProfileBackgroundImageRelative = styled.img`
    left: 0;
    top: 0;
    position: relative;
    height: 100%;
    width: 100%;
`;

const ProfileContentContainer = styled.div`
    padding-left: 2.375rem;
    padding-right: 2.375rem;
`;

const DisplayFlex = styled.div`
    display: flex;
`;

const ProfileContentRelative = styled.div`
    margin-top: 0.5rem;
    position: relative;
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

const UserCardPhotoEdit = styled.div`
    width: 100%;
    height: 100%;
    background-color: #f9fafb;
    display: block;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ProfilePhotoEditCamera = styled(FontAwesomeIcon)`
    width: 48px;
    height: 48px;
    color: #788fa5;
`;

const ProfilePhotoEditButton = styled.button`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    z-index: 2;
    background: none;
    border: none;
    padding: 0;
`;

const UserImage = styled.div`
  width: 152px;
  height: 152px;
  border-radius: 50%;
  outline: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

// const ProfilePhotoEditPreview = styled.img`
//     width: 152px;
//     height: 152px;
//     border-radius: 50%;
//     outline: 0;
// `;

function NewProfile({ userImageLoad, onImageChange }: NewProfileProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closenModal = () => {
    setModalOpen(false);
  };

  return (
    <UserCard>
      <BackgroundImageContainer>
        <ProfileBackgroundImageEdit>
          <ProfileBackgroundImage>
            <ProfileBackgroundImageContainer>
              <ProfileBackgroundImageRelative src="https://i.pinimg.com/564x/4b/86/7c/4b867c773a9a85fe35b6af25e5975c1b.jpg" />
            </ProfileBackgroundImageContainer>
          </ProfileBackgroundImage>
        </ProfileBackgroundImageEdit>
      </BackgroundImageContainer>
      <ProfileContentContainer>
        <DisplayFlex>
          <UserCardPhoto>
            <UserCardPhotoWrapper>
              {userImageLoad === ''
                ? (
                  <UserCardPhotoEdit>
                    <ProfilePhotoEditCamera icon={faCamera} />
                    <ProfilePhotoEditButton onClick={openModal} type="button" />
                    <NewProfileModal
                      modalOpen={modalOpen}
                      closenModal={closenModal}
                      onImageChange={onImageChange}
                    />
                  </UserCardPhotoEdit>
                )
                : (
                  <UserCardPhotoEdit>
                    <ProfilePhotoEditButton onClick={openModal} type="button">
                      <UserImage style={{ backgroundImage: `url(${userImageLoad})` }} />
                    </ProfilePhotoEditButton>
                    {/* <NewProfileModal modalOpen={modalOpen} closenModal={closenModal} /> */}
                  </UserCardPhotoEdit>
                )}

            </UserCardPhotoWrapper>
          </UserCardPhoto>
        </DisplayFlex>
        <ProfileContentRelative />
      </ProfileContentContainer>
    </UserCard>
  );
}

export default NewProfile;
