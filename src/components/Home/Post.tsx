import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const Container = styled.div`
    height: 100%;
    width: 800px;
    background: #FFFFFF;
    border: 1px solid #CFCFCF;
    box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    font-family: 'Soehne web buch', sans-serif;
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

const User = styled.div`
    padding: 16px;
`;

const UserContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding-bottom: 20px;
`;

const UserImg = styled.img`
    display: block;
    background-size: 100%;
    border-radius: 50%;
    width: 36px;
    height: 36px;
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
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #414141;
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
  margin: 18px 0;
  display: block;
  background-size: 100%;
  height: 528px;
  width: 100%;
  object-fit: fill;
`;

const BottomContent = styled.div`
  display: flex;
  align-items: center;
  height: 54px;
  background: #F1F1F1;
  border-radius: 0px 0px 20px 20px;
`;

const IconButton = styled.button`
    user-select: none;
    outline: 0;
    border: 0;
    cursor: pointer;
    fill: rgba(117, 117, 117, 1);
    padding: 0 0 0 20px;
    background: transparent;
    
`;

const LikeIcon = styled(ThumbUpIcon)<{ fillIcon?: string }>`
   &:hover {
    stroke: black;
    fill: black;
  }
  fill:  ${(props) => props.fillIcon || ''};
`;

const LikesCount = styled.p`
  font-size: 13px;
  color: rgba(117, 117, 117, 1);
  line-height: 20px;
  font-weight: 400;
  padding: 0 6px;
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
  const [likes, setLikes] = useState<number>(postData.postData.likes);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  useEffect(() => {
    axios.get(`https://localhost:7260/api/User/${postData.postData.idUser}`)
      .then((res: any) => {
        setPostAuthor(res.data);
        console.log(postData.postData.likes);

        axios.get(`https://localhost:7260/api/Like/${postData.postData.idPost}/${postData.postData.idUser}`)
          .then((resp: any) => {
            setIsLiked(resp.data.liked);
          });

        axios.get(`https://localhost:7260/api/UserImage/${postData.postData.idUser}`).then((res1: any) => {
          setPostAuthorImage(res1.data);
        }).then(() => {
          axios.get(`https://localhost:7260/api/PostImage/${postData.postData.idPost}`).then((res2: any) => {
            if (res2.data) {
              setPostDataImage(`data:image/jpeg;base64,${res2.data}`);
            } else {
              setPostDataImage(null);
            }
          });
        });
      });
  }, []);

  const handleLike = () => {
    axios.put('https://localhost:7260/api/Like', {
      idPost: Number(postData.postData.idPost),
      idUser: postData.postData.idUser,
    }).then(() => {
      setIsLiked(!isLiked);
      setLikes(!isLiked ? likes + 1 : likes - 1);
    });
  };

  return (
    <Container>
      <Link
        to={`post/${postData.postData.idPost}`}
        style={{ textDecoration: 'none' }}
      >
        <User>
          <UserContent>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <UserImg style={{ backgroundImage: `url(data:image/jpeg;base64,${postAuthorImage})` }} />
              <UserNameContainer>
                <UserNameBlock>
                  <UserNameText>{`${postAuthor.name ?? 'Yarik'} ${postAuthor.surname}`}</UserNameText>
                </UserNameBlock>
              </UserNameContainer>
            </div>
            <DataPost>
              <DataPostContainer>
                <DateWrapper>
                  {new Date(postData.postData.date).toDateString()}
                </DateWrapper>
              </DataPostContainer>
            </DataPost>
          </UserContent>
          <Title>{postData.postData.title}</Title>
          {postDataImage && <Img style={{ backgroundImage: `url(${postDataImage})` }} />}
          <PostContent
            dangerouslySetInnerHTML={{ __html: postData.postData.postContent }}
          />
        </User>
      </Link>
      <BottomContent>
        <IconButton onClick={handleLike}>
          {!isLiked ? <LikeIcon color="action" /> : <LikeIcon /> }
        </IconButton>
        <LikesCount>
          {likes}
        </LikesCount>
      </BottomContent>
    </Container>
  );
}

export default Post;
