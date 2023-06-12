import { faCamera, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import styled from 'styled-components';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import NewProfileModal from './NewProfileModal';
import img1 from '../../assets/images/img1.png';
import instance from '../../http';

interface NewProfileProps {
  userId: string;
  selectedImage: string;
  setSelectedImage: (e: any) => void;
  selectedBackgroundImage: string;
  setSelectedBackgroundImage: (e: any) => void;
}

const UserCard = styled.section`
  @media screen and (min-width: 576px) {
    border-radius: 1.25rem;
  }
  background: #ffffff;
  border: 1px solid #cfcfcf;
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
  transition-duration: 0.4s;
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
  background: rgba(117,117,117,1);
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
  background-position: center;
`;

const IconWrapper = styled.div<{ visible?: boolean; icon?:any }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
  transition: opacity 0.4s ease-in-out;
  opacity: ${(props) => (props.visible ? 1 : 0)};

`;

// const Icon = styled(FontAwesomeIcon)`
//   opacity: ${({ visible }) => (visible ? 1 : 0)};
// `;

const Icon = styled(FontAwesomeIcon)`
  width: 24px;
  height: 24px;
`;

const ProfileTopcardIamgeEditIcon = styled.section`
  line-height: 1.5;
  position: absolute;
  top: calc(1rem + 0.25rem);
  right: calc(1rem + 0.25rem);
  
`;

const ButtonEditBackgroundImg = styled.button`
  height: 2rem;
  width: 2rem;
  min-width: auto;
  border-radius: 50%;
  transition-timing-function: cubic-bezier(.4,0,.2,1);
  transition-duration: 167ms;
  align-items: center;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  font-family: inherit;
  font-weight: 600;
  display: inline-flex;
  justify-content: center;
  max-width: 480px;
  overflow: hidden;
  text-align: center;
  vertical-align: middle;
  font-size: 0.875rem;
  min-height: 1.5rem;
  line-height: 0.7;
  background: #fff;
  &:hover {
    color: #60BDC2;
  }
`;

const InputEditBackgroundImg = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  opacity: 0;
  cursor: pointer;
  border: none;
`;
// const ProfilePhotoEditPreview = styled.img`
//     width: 152px;
//     height: 152px;
//     border-radius: 50%;
//     outline: 0;
// `;

const NotBackgroundImg = styled.p`
  color: #fff;
  font-size: 1rem;

`;

function NewProfile({
  userId, selectedImage,
  setSelectedImage, selectedBackgroundImage, setSelectedBackgroundImage,
}:NewProfileProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleDeleteUserImg = () => {
    instance
      .delete(`https://localhost:44353/api/delete-user-image/${userId}`);
    setSelectedImage('');
  };

  const handleDeleteUserBackgroundImage = () => {
    instance
      .delete(`https://localhost:44353/api/delete-background-image/${userId}`);
    setSelectedBackgroundImage('');
  };

  const onImageChange = (e: any) => {
    if (!e.target.files[0]) {
      return;
    }

    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append('id', userId);
    formData.append('file', e.target.files[0]);
    instance.put('https://localhost:44353/api/upload-user-image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };

  const onBackgroundImageChange = (e: any) => {
    if (!e.target.files[0]) {
      return;
    }

    const file = e.target.files[0];
    setSelectedBackgroundImage(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append('id', userId);
    formData.append('file', e.target.files[0]);
    instance.put('https://localhost:44353/api/upload-background-image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };

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
              {selectedBackgroundImage === '' ? (
                <NotBackgroundImg>Upload a background for your profile</NotBackgroundImg>
              )
                : (
                  <ProfileBackgroundImageRelative src={selectedBackgroundImage} />
                ) }

            </ProfileBackgroundImageContainer>
          </ProfileBackgroundImage>
          <ProfileTopcardIamgeEditIcon>
            {selectedBackgroundImage === '' ? (
              <ButtonEditBackgroundImg>
                <InputEditBackgroundImg type="file" onChange={onBackgroundImageChange} />
                <FontAwesomeIcon icon={faPen} />
              </ButtonEditBackgroundImg>

            ) : (
              <ButtonEditBackgroundImg onClick={handleDeleteUserBackgroundImage}>
                <FontAwesomeIcon icon={faTrashCan} />
              </ButtonEditBackgroundImg>
            )}

          </ProfileTopcardIamgeEditIcon>
        </ProfileBackgroundImageEdit>
      </BackgroundImageContainer>
      <ProfileContentContainer>
        <DisplayFlex>
          <UserCardPhoto>
            <UserCardPhotoWrapper>
              {selectedImage === '' ? (
                <UserCardPhotoEdit>
                  <ProfilePhotoEditCamera icon={faCamera} />
                  <ProfilePhotoEditButton onClick={openModal} type="button" />
                  <NewProfileModal
                    modalOpen={modalOpen}
                    closenModal={closenModal}
                    onImageChange={onImageChange}
                    src={img1}
                  />
                </UserCardPhotoEdit>
              ) : (
                <UserCardPhotoEdit>
                  <ProfilePhotoEditButton onClick={openModal} type="button">
                    <UserImage
                      style={{ backgroundImage: `url(${selectedImage})` }}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    />
                    <IconWrapper
                      visible={isHovered}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onClick={handleDeleteUserImg}
                    >
                      <Icon
                        icon={faTrashCan}
                      />
                    </IconWrapper>
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
