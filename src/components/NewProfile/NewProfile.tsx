import { faCamera, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import NewProfileModal from './NewProfileModal';
import instance, { BASE_URL } from '../../http';
import UserProfileInfoBlock from '../UserProfile/UserProfileInfoBlock';
import BackgroundImage from '../UserProfile/BackgroundImage';
import ProfileContent from '../UserProfile/ProfileContent';
import NewPost from '../NewPost/NewPost';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

interface NewProfileProps {
  userId: string;
  selectedImage: string;
  setSelectedImage: (e: any) => void;
  selectedBackgroundImage: string;
  setSelectedBackgroundImage: (e: any) => void;
}

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

const IconWrapper = styled.div<{ visible?: boolean; icon?: any }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
  transition: opacity 0.4s ease-in-out;
  opacity: ${(props) => (props.visible ? 1 : 0)};
`;

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
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
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
    color: #60bdc2;
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

const NotBackgroundImg = styled.p`
  color: #fff;
  font-size: 1rem;
`;

interface UserDate {
  id: number,
  name: string,
  surname: string,
  profileImageUrl: string,
  backgroundImageUrl: string,
  biography: string,
  followersAmount: number,
  commentsAmount: number,
  postsAmount: number,
  isMyself: boolean,
  isFollowed: boolean
}

function NewProfile({
  userId,
  selectedImage,
  setSelectedImage,
  selectedBackgroundImage,
  setSelectedBackgroundImage,
}: NewProfileProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [user, setUser] = useState({} as UserDate);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const { loadMoreRef, page } = useInfiniteScroll();
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    instance.get(`${BASE_URL}/get-user/${userId}`)
      .then((resp: any) => {
        setUser(resp.data);
      })
      .then(() => {
        if (totalCount === 0 || totalCount > posts.length) {
          instance.get(`${BASE_URL}/get-user-posts/${user.id}/${page}`)
            .then((res: any) => {
              setPosts([...posts, ...res.data.sort((a: any, b: any) => b.idPost - a.idPost)]);
              setTotalCount(res.headers['x-total-count']);
            })
            .finally(() => setFetching(false));
        }
      });
  }, [user.name]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleDeleteUserImg = () => {
    instance.delete(`${BASE_URL}/delete-user-image`);
    setSelectedImage('');
  };

  const handleDeleteUserBackgroundImage = () => {
    instance.delete(
      `${BASE_URL}/delete-user-backimage`,
    );
    setSelectedBackgroundImage('');
  };

  const handleSubscribe = () => {
    instance.put(`${BASE_URL}/follow/${userId}`)
      .then((resp: any) => {
        setUser(resp.data);
      });
  };

  const onImageChange = (e: any) => {
    if (!e.target.files[0]) {
      return;
    }

    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    instance.post(`${BASE_URL}/upload-user-image`, formData, {
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
    instance.post(
      `${BASE_URL}/upload-user-backimage`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closenModal = () => {
    setModalOpen(false);
  };

  // const getPosts = useCallback(() => {
  //   if (totalCount === 0 || totalCount > posts.length) {
  //     instance.get(`${BASE_URL}/get-user-posts/${user.name}/${page}`)
  //       .then((res: any) => {
  //         debugger;
  //         setPosts([...posts, ...res.data.sort((a: any, b: any) => b.idPost - a.idPost)]);
  //         setTotalCount(res.headers['x-total-count']);
  //       })
  //       .finally(() => setFetching(false));
  //   }
  // }, [page]);
  //
  // useEffect(() => {
  //   getPosts();
  // }, [getPosts]);

  return (
    <>
      <UserProfileInfoBlock>
        <BackgroundImage>
          <ProfileBackgroundImage>
            <ProfileBackgroundImageContainer>
              {selectedBackgroundImage === '' ? (
                <NotBackgroundImg>
                  Upload a background for your profile
                </NotBackgroundImg>
              ) : (
                <ProfileBackgroundImageRelative
                  style={{ backgroundImage: `url(${selectedBackgroundImage})` }}
                />
              )}
            </ProfileBackgroundImageContainer>
          </ProfileBackgroundImage>
          <ProfileTopcardIamgeEditIcon>
            {selectedBackgroundImage === '' ? (
              <ButtonEditBackgroundImg>
                <InputEditBackgroundImg
                  type="file"
                  onChange={onBackgroundImageChange}
                />
                <FontAwesomeIcon icon={faPen} />
              </ButtonEditBackgroundImg>
            ) : (
              <ButtonEditBackgroundImg
                onClick={handleDeleteUserBackgroundImage}
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </ButtonEditBackgroundImg>
            )}
          </ProfileTopcardIamgeEditIcon>
        </BackgroundImage>
        <ProfileContent
          name={user.name}
          surname={user.surname}
          followersAmount={user.followersAmount}
          postsAmount={user.postsAmount}
          isFollowed={user.isFollowed}
          isMyself={user.isMyself}
          commentsAmount={user.commentsAmount}
          handleSubscribe={handleSubscribe}
        >
          {selectedImage === '' ? (
            <UserCardPhotoEdit>
              <ProfilePhotoEditCamera icon={faCamera} />
              <ProfilePhotoEditButton onClick={openModal} type="button" />
              <NewProfileModal
                modalOpen={modalOpen}
                closenModal={closenModal}
                onImageChange={onImageChange}
                src="https://storage.googleapis.com/circleci-bucket/IconsForCategory/addPhotoPlaceHolder.png"
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
                  <Icon icon={faTrashCan} />
                </IconWrapper>
              </ProfilePhotoEditButton>
            </UserCardPhotoEdit>
          )}
        </ProfileContent>
      </UserProfileInfoBlock>
      <>
        <div>
          {posts.map((post: any, index: number) => (
            <NewPost
              key={index}
              postData={post}
              setPosts={setPosts}
              fetching={fetching}
            />
          ))}
        </div>
        <div ref={loadMoreRef} />
      </>
    </>
  );
}

export default NewProfile;
