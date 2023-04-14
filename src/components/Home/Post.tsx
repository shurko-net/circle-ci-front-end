import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import {
  getPostImage, getUser, getUserImage,
} from '../../api/api';

const Container = styled.div`
    height: 100%;
    width: 100%;
    @media (min-width: 1080px) {
      margin-bottom: 48px;
    }
    @media (min-width: 904px) and (max-width: 1079.98px) {
      margin-bottom: 48px;
    }
    @media (min-width: 728px) and (max-width: 903.98px) {
      margin-bottom: 48px;
    }
    @media (min-width: 552px) and (max-width: 727.98px) {
      margin-bottom: 48px;
    }
    @media (max-width: 551.98px) {
      margin-bottom: 32px;
    }
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;
`;

const Description = styled.div`
    margin-right: 20px;
    min-width: 0;
    width: 100%;
    display: block;
`;

const User = styled.div`
    padding: 16px;
    display: block;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 8px;
    transition: box-shadow 0.5s;
    cursor: pointer;
    &:hover {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }
`;

const UserContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    padding-bottom: 8px;
`;

const UserImgBlock = styled.div`
    position: relative;
    display: block;
`;

const UserImg = styled.img`
    display: block;
    background-size: 100%;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: rgba(242, 242, 242, 1);
    box-sizing: border-box;
`;

const UserNameContainer = styled.div`
    display: flex;
    margin-left: 8px;
    flex-wrap: wrap;
    align-items: center;
`;

const UserNameBlock = styled.div`
    height: 16px;
    display: block;
`;

const UserNameText = styled.h4`
    padding-right: 2px;
    word-break: break-all;
    max-height: 16px;
    line-height: 16px;
    font-size: 13px;
    font-weight: 500;
    overflow: hidden;
    color: rgba(41, 41, 41, 1);
`;

const Title = styled.h2`
    color: rgba(41, 41, 41, 1);
    overflow: hidden;
    font-weight: 700;
    text-overflow: ellipsis;
    display: -webkit-box;
    @media (min-width: 1080px) {
      letter-spacing: 0;
      line-height: 28px;
      max-height: 56px;
      font-size: 22px;
    }
    @media (min-width: 904px) and (max-width: 1079.98px) {
      letter-spacing: 0;
      line-height: 28px;
      max-height: 56px;
      font-size: 22px;
    }
    @media (orientation: landscape) and (max-width: 903.98px) {
      max-height: none;
    }
    @media (min-width: 728px) and (max-width: 903.98px) {
      letter-spacing: 0;
      line-height: 28px;
      max-height: 56px;
      font-size: 22px;
    }
    @media (min-width: 552px) and (max-width: 727.98px) {
      letter-spacing: 0;
      line-height: 20px;
      max-height: 40px;
      font-size: 16px;
    }
    @media (max-width: 551.98px) {
      letter-spacing: 0;
      line-height: 20px;
      max-height: 40px;
      font-size: 16px;
    }
`;

const BlockContent = styled.div`
    padding-top: 4px;
    display: block;
    position: relative;
`;

const PostContent = styled.div`
    max-height: 40px;
    text-overflow: ellipsis;
    color: rgba(117, 117, 117, 1);
    font-size: 16px;
    overflow: hidden;
    line-height: 20px;
    font-weight: 400;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden; 
`;

const DataPost = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* width: 62%; */
    @media (min-width: 1080px) {
      padding-top: 8px;
    }
    @media (min-width: 904px) and (max-width: 1079.98px) {
      padding-top: 8px;
    }
    @media (min-width: 728px) and (max-width: 903.98px) {
      padding-top: 8px;
    }
    @media (min-width: 552px) and (max-width: 727.98px) {
      padding-top: 4px;
    }
    @media (max-width: 551.98px) {
      padding-top: 4px;
    }
 `;

const DataPostContainer = styled.div`
    display: flex;
    align-items: center;
    min-width: 0;
    line-height: 20px;
    font-weight: 400;
    white-space: nowrap;
`;

const DateWrapper = styled.span`
    font-size: 13px;
    color: rgba(117, 117, 117, 1);
    line-height: 20px;
    font-weight: 400;
`;

const Img = styled.img`
  background-color: rgba(242, 242, 242, 1);
  box-sizing: border-box;
  display: block;
  position: absolute;
  background-size: 100%;
  height: 100px;
  width: 200px;
  left: 75%;
  top: -1250%
`;

interface IUser {
  idUser: number,
  name?: string,
  surname?: string,
  email?: string,
  password?: string,
  tNumber?: string,
  biography?: string,
  subscribed?: number,
}

function Post(postData: any) {
  const [postAuthor, setPostAuthor] = useState<IUser>({
    biography: '',
    email: '',
    idUser: 0,
    name: '',
    password: '',
    subscribed: 0,
    surname: '',
    tNumber: '',
  });
  const [postAuthorImage, setPostAuthorImage] = useState('');
  const [postDataImage, setPostDataImage] = useState<any>();

  useEffect(() => {
    axios.get(`https://localhost:44353/api/User/${postData.postData.idUser}`)
      .then((res: any) => {
        setPostAuthor(res.data);

        axios.get(`https://localhost:44353/api/UserImage/${postData.postData.idUser}`).then((res1: any) => {
          setPostAuthorImage(res1.data);
        }).then(() => {
          axios.get(`https://localhost:44353/api/PostImage/${postData.postData.idPost}`).then((res2: any) => {
            if (res2.data) {
              setPostDataImage(`data:image/jpeg;base64,${res2.data}`);
            } else {
              setPostDataImage(null);
            }
          });
      });
  }, []);

  return (
    <Container>
      <Link
        to={`post/${postData.postData.idPost}`}
        style={{ textDecoration: 'none' }}
      >
        <Content>
          <Description>
            <User>
              <UserContent>
                <UserImgBlock>
                  <UserImg style={{ backgroundImage: `url(data:image/jpeg;base64,${postAuthorImage})` }} />
                </UserImgBlock>
                <UserNameContainer>
                  <UserNameBlock>
                    <UserNameText>{`${postAuthor.name ?? 'Yarik'} ${postAuthor.surname}`}</UserNameText>
                  </UserNameBlock>
                </UserNameContainer>
              </UserContent>
              <Title>{postData.postData.title}</Title>
              <BlockContent>
                {postDataImage && <Img style={{ backgroundImage: `url(${postDataImage})` }} />}
              </BlockContent>
              <BlockContent>
                <PostContent
                  dangerouslySetInnerHTML={{ __html: postData.postData.postContent }}
                />
              </BlockContent>
              <DataPost>
                <DataPostContainer>
                  <DateWrapper>
                    {new Date(postData.postData.date).toDateString()}
                  </DateWrapper>
                </DataPostContainer>
              </DataPost>
            </User>
          </Description>
        </Content>
      </Link>
    </Container>
  );
}

export default Post;
